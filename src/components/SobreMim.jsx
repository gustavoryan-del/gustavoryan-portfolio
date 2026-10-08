import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import { FaRocket } from "react-icons/fa";
import { GiCrossedSwords, GiDragonHead } from "react-icons/gi";
import {
  IoAirplaneOutline,
  IoDocumentTextOutline,
  IoFootballOutline,
  IoGameControllerOutline,
  IoLocationOutline,
  IoSchoolOutline,
  IoStarOutline,
  IoTvOutline,
} from "react-icons/io5";
import { TbCake, TbCertificate } from "react-icons/tb";
import {
  COMANDO_EN,
  GALO_URL,
  NASCIMENTO,
  QUICK_STATS,
  TRABALHOS_FINAIS,
  assistindo,
  clientes,
  continentes,
  disciplinas,
  formacao,
  hobbies,
  hoje,
  serieFavorita,
  vejaTambem,
  vivencia,
} from "../data/sobreData";
import "./SobreMim.css";

// A cor de cada bloco vem de um token do theme.css, passada como --serie:
// a cor marca o bloco (borda, ícone, ponto),
// os textos ficam sempre nos tokens de texto.
const serie = (token) => ({ "--serie": `var(${token})` });

// Idade de hoje: um ano a menos enquanto o aniversário deste ano não chegou
const IDADE = (() => {
  const data = new Date();
  const { ano, mes, dia } = NASCIMENTO;
  const mesAtual = data.getMonth() + 1;
  const jaFez = mesAtual > mes || (mesAtual === mes && data.getDate() >= dia);
  return data.getFullYear() - ano - (jaFez ? 0 : 1);
})();

const LUGARES = continentes.reduce((total, c) => total + c.lugares.length, 0);

const HOBBY_ICONES = {
  futsal: IoFootballOutline,
  valorant: GiCrossedSwords,
  xadrez: GiDragonHead,
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function Link({ href, className, children, ...rest }) {
  // Sem endereço (ex.: Álamo TI): texto comum, sem o sublinhado de link
  if (!href) {
    const semLink = className
      ?.split(" ")
      .filter((nome) => !nome.startsWith("sobre-link"))
      .join(" ");
    return <span className={semLink || undefined}>{children}</span>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}

// Quebra só entre as palavras, nunca no meio delas.
function Cmd({ children, className = "" }) {
  const partes = children.split(" ");
  return (
    <code className={`sobre-cmd ${className}`}>
      {partes.map((parte, i) => (
        <React.Fragment key={i}>
          {i > 0 && " "}
          <span>{parte}</span>
        </React.Fragment>
      ))}
    </code>
  );
}

function Secao({ titulo, cmd, children }) {
  return (
    <section className="sobre-secao">
      <h4 className="sobre-secao-titulo">
        <span>{titulo}</span>
        {cmd && <Cmd>{cmd}</Cmd>}
      </h4>
      {children}
    </section>
  );
}

/* ---------- Cabeçalho ---------- */

// "programador por profissão, professor por vocação", digitado. O texto
// completo fica invisível na mesma célula do grid: a altura não pula.
function Lema() {
  const { t, i18n } = useTranslation();
  const [estatico] = useState(prefersReducedMotion);
  const parte1 = t("sobre.lema_1");
  const completo = `${parte1} ${t("sobre.lema_2")}`;

  return (
    <p className="sobre-lema">
      <span className="sobre-lema-reserva" aria-hidden="true">
        {"// "}
        {completo}
      </span>
      {estatico ? (
        <span className="sobre-lema-texto">
          {"// "}
          {completo}
        </span>
      ) : (
        <>
          <span className="sobre-sr">{completo}</span>
          <TypeAnimation
            key={i18n.language}
            sequence={[`// ${parte1}`, 700, `// ${completo}`]}
            wrapper="span"
            cursor
            repeat={0}
            speed={60}
            className="sobre-lema-texto"
            aria-hidden="true"
          />
        </>
      )}
    </p>
  );
}

function Cabecalho() {
  const { t } = useTranslation();
  return (
    <header className="sobre-cabecalho">
      <img
        src="/avatar.jpeg"
        alt={t("sobre.avatar_alt")}
        className="sobre-avatar"
        width="132"
        height="132"
      />
      <div className="sobre-identidade">
        <h3 className="sobre-nome">{t("sobre.nome")}</h3>
        <p className="sobre-cargo">{t("sobre.cargo")}</p>
        <Lema />
        <ul className="sobre-chips">
          <li style={serie("--icon-book")}>
            <TbCake aria-hidden="true" />
            {t("sobre.idade", { count: IDADE })}
          </li>
          <li style={serie("--icon-location")}>
            <IoLocationOutline aria-hidden="true" />
            {t("sobre.local")}
          </li>
        </ul>
      </div>
    </header>
  );
}

/* ---------- Números ---------- */

function Numeros() {
  const { t } = useTranslation();
  const icons = [IoSchoolOutline, IoFootballOutline, FaRocket];
  const cards = QUICK_STATS.map((card, index) => ({
    ...card,
    cor: ["--icon-school", "--highlight", "--icon-work"][index],
    Icon: icons[index],
    detalhe: t(`sobre.kpi.${card.id}_detalhe`),
  }));

  return (
    <ul className="sobre-kpis">
      {cards.map((card) => {
        const { id, cor, valor, detalhe, cmd } = card;
        const Icon = card.Icon;
        return (
          <li key={id} className="sobre-kpi" style={serie(cor)}>
            <Icon className="sobre-kpi-icone" aria-hidden="true" />
            <span className="sobre-kpi-valor">{valor}</span>
            <span className="sobre-kpi-rotulo">{t(`sobre.kpi.${id}_rotulo`)}</span>
            <span className="sobre-kpi-detalhe">{detalhe}</span>
            {cmd && <Cmd>{cmd}</Cmd>}
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Hoje ---------- */

// Logo da organização ou, sem logo, um ícone na cor do bloco
function Marca({ logo, cor, alt, icone }) {
  const Icone = icone ?? FaRocket;
  if (logo) {
    return (
      <img src={logo} alt={alt} className="sobre-logo" loading="lazy" width="40" height="40" />
    );
  }
  return (
    <span className="sobre-logo sobre-logo-icone" style={serie(cor)} aria-hidden="true">
      <Icone />
    </span>
  );
}

function Hoje() {
  const { t } = useTranslation();

  return (
    <ul className="sobre-hoje">
      {hoje.map((item) => (
        <li key={item.id} className="sobre-hoje-item">
          <Marca logo={item.logo} cor={item.cor} alt={t(`sobre.hoje.${item.id}.org`)} />
          <div className="sobre-hoje-texto">
            <p className="sobre-hoje-cargo">
              {t(`sobre.hoje.${item.id}.cargo`)}{" "}
              <span className="sobre-hoje-em">{t("sobre.hoje.em")}</span>{" "}
              <Link href={item.url} className="sobre-link-forte">
                {t(`sobre.hoje.${item.id}.org`)}
              </Link>
            </p>
            <p className="sobre-hoje-detalhe">
              <span className="sobre-ponto-agora" aria-hidden="true" />{" "}
              {t(`sobre.hoje.${item.id}.detalhe`)}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Formação ---------- */

function Trabalho({ trabalho }) {
  const { t } = useTranslation();
  return (
    <div className="sobre-trabalho">
      <span className="sobre-trabalho-tipo">
        <IoDocumentTextOutline aria-hidden="true" />
        {t(`sobre.formacao.tipos.${trabalho.tipo}`)}
      </span>
      <Link href={trabalho.url} className="sobre-link sobre-trabalho-titulo" lang="pt-BR">
        “{trabalho.titulo}”
      </Link>
      <span className="sobre-trabalho-orientador">
        {t("sobre.formacao.orientador")}{" "}
        <Link href={trabalho.orientador.url} className="sobre-link">
          {trabalho.orientador.nome}
        </Link>
      </span>
    </div>
  );
}

function Formacao() {
  const { t } = useTranslation();
  return (
    <>
      <p className="sobre-intro sobre-formacao-intro">
        <Trans
          i18nKey="sobre.formacao.intro"
          components={{ repo: <Link href={TRABALHOS_FINAIS} className="sobre-link" /> }}
        />
      </p>
      <ul className="sobre-formacao">
        {formacao.map((item) => (
          <li key={item.id} className="sobre-diploma">
            <Marca
              logo={item.logo}
              cor={item.cor}
              alt={t(`sobre.formacao.${item.id}.org`)}
              icone={TbCertificate}
            />
            <div className="sobre-diploma-texto">
              <span className="sobre-marco-periodo">
                {item.inicio} – {item.fim ?? t("sobre.formacao.atual")}
              </span>
              <span className="sobre-diploma-nivel">{t(`sobre.formacao.${item.id}.nivel`)}</span>
              <span className="sobre-diploma-curso">{t(`sobre.formacao.${item.id}.curso`)}</span>
              <Link href={item.url} className="sobre-link sobre-diploma-org">
                {t(`sobre.formacao.${item.id}.org`)}
              </Link>
              {item.modulos && (
                <span className="sobre-lista-ponto sobre-diploma-modulos">
                  {item.modulos.map((modulo) => (
                    <span key={modulo}>{t(`sobre.formacao.${item.id}.modulos.${modulo}`)}</span>
                  ))}
                </span>
              )}
              {item.trabalho && <Trabalho trabalho={item.trabalho} />}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function Disciplinas() {
  const { t } = useTranslation();
  const semestreAtual = "2026.2";
  const atuais = disciplinas.filter((item) => item.semestres.includes(semestreAtual)).length;

  return (
    <>
      <p className="sobre-intro">
        {t("sobre.disciplinas.intro", { count: disciplinas.length })}
      </p>
      <p className="sobre-legenda">
        <span className="sobre-ponto-agora" aria-hidden="true" />
        {t("sobre.disciplinas.agora", { count: atuais })}
      </p>
      <ul className="sobre-tags">
        {disciplinas.map((item) => (
          <li key={item.id}>
            <span className={`sobre-tag${item.semestres.includes(semestreAtual) ? " sobre-tag-agora" : ""}`}>
              {item.semestres.includes(semestreAtual) && (
                <span className="sobre-ponto-agora" aria-hidden="true" />
              )}
              {item.nome}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ---------- Vivência e clientes ---------- */

function Vivencia() {
  const { t } = useTranslation();
  return (
    <ul className="sobre-tags">
      {vivencia.map(({ id, url }) => (
        <li key={id}>
          {url ? (
            <Link href={url} className="sobre-tag">
              {t(`sobre.vivencia.${id}`)}
            </Link>
          ) : (
            <span className="sobre-tag">{t(`sobre.vivencia.${id}`)}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function Clientes() {
  const { t } = useTranslation();
  return (
    <ul className="sobre-tags">
      {clientes.map(({ id, url }) => (
        <li key={id}>
          <Link
            href={url}
            className="sobre-tag"
            title={t(`sobre.clientes.${id}.desc`, { defaultValue: "" }) || undefined}
          >
            {t(`sobre.clientes.${id}.nome`)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Fora do terminal ---------- */

function Pessoal() {
  const { t } = useTranslation();
  const linhas = [
    {
      id: "time",
      Icon: IoFootballOutline,
      cor: "--success",
      valor: (
        <>
          {t("sobre.pessoal.atleticano")}{" "}
          <Link className="sobre-link" href={GALO_URL}>
            Galo
          </Link>{" "}
          🐔
          <Cmd className="sobre-cmd-inline">neofetch</Cmd>
        </>
      ),
    },
    {
      id: "hobbies",
      Icon: IoGameControllerOutline,
      cor: "--highlight",
      valor: (
        <>
          <span>
            {hobbies.map(({ id, url }) => {
              const Icon = HOBBY_ICONES[id];
              const conteudo = (
                <>
                  <Icon aria-hidden="true" />
                  {t(`sobre.pessoal.hobbies.${id}`)}
                </>
              );
              return url ? (
                <Link key={id} href={url} className="sobre-link sobre-hobby">
                  {conteudo}
                </Link>
              ) : (
                <span key={id} className="sobre-hobby">
                  {conteudo}
                </span>
              );
            })}
          </span>
          <Cmd className="sobre-cmd-inline">game</Cmd>
        </>
      ),
    },
    {
      id: "serie",
      Icon: IoStarOutline,
      cor: "--warn",
      valor: (
        <Link href={serieFavorita.url} className="sobre-link sobre-link-forte">
          {serieFavorita.nome}
        </Link>
      ),
    },
    {
      id: "assistindo",
      Icon: IoTvOutline,
      cor: "--icon-book",
      valor: (
        <span className="sobre-lista-ponto">
          {assistindo.map(({ nome, url }) => (
            <Link key={nome} href={url} className="sobre-link">
              {nome}
            </Link>
          ))}
        </span>
      ),
    },
  ];

  return (
    <dl className="sobre-kv">
      {linhas.map((linha) => {
        const { id, cor, valor } = linha;
        const Icon = linha.Icon;
        return (
          <div key={id} className="sobre-kv-linha" style={serie(cor)}>
            <dt>
              <Icon aria-hidden="true" />
              {t(`sobre.pessoal.rotulos.${id}`)}
            </dt>
            <dd>{valor}</dd>
          </div>
        );
      })}
    </dl>
  );
}

function Passaporte() {
  const { t } = useTranslation();
  return (
    <div className="sobre-passaporte">
      <p className="sobre-passaporte-titulo">
        <IoAirplaneOutline aria-hidden="true" />
        <span>{t("sobre.pessoal.passaporte")}</span>
        <span className="sobre-passaporte-total">
          {t("sobre.pessoal.passaporte_total", {
            lugares: LUGARES,
            continentes: continentes.length,
          })}
        </span>
      </p>

      {/* Uma faixa por continente, do tamanho da quantidade de lugares */}
      <div className="sobre-faixa" aria-hidden="true">
        {continentes.map((c) => (
          <span
            key={c.id}
            className="sobre-faixa-seg"
            style={{ ...serie(c.cor), flexGrow: c.lugares.length }}
            title={`${t(`sobre.pessoal.continentes.${c.id}`)} · ${c.lugares.length}`}
          />
        ))}
      </div>

      <div className="sobre-continentes">
        {continentes.map((c) => (
          <div key={c.id} className="sobre-continente" style={serie(c.cor)}>
            <p className="sobre-continente-nome">
              <span className="sobre-quadrado" aria-hidden="true" />
              {t(`sobre.pessoal.continentes.${c.id}`)}
              <span className="sobre-inst-conta">{c.lugares.length}</span>
            </p>
            <ul className="sobre-carimbos">
              {c.lugares.map((lugar) => {
                const Bandeira = lugar.Bandeira;
                return (
                  <li key={lugar.id} className="sobre-carimbo" title={lugar.sigla}>
                    <Bandeira className="sobre-bandeira" aria-hidden="true" />
                    {t(`sobre.pessoal.lugares.${lugar.id}`)}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Página ---------- */

const SobreMim = () => {
  const { t, i18n } = useTranslation();
  const ingles = i18n.language.startsWith("en");
  const comando = (nome) => (ingles ? (COMANDO_EN[nome] ?? nome) : nome);
  const b = { b: <strong /> };

  return (
    <article className="sobre-painel">
      <Cabecalho />

      <div className="sobre-bio">
        <p>
          <Trans i18nKey="sobre.bio_1" components={b} />
        </p>
        <p>
          <Trans
            i18nKey="sobre.bio_2"
            components={b}
          />
        </p>
      </div>

      <Numeros />

      <Secao titulo={t("sobre.secoes.hoje")}>
        <Hoje />
      </Secao>

      <Secao titulo={t("sobre.secoes.formacao")} cmd={comando("curriculo")}>
        <Formacao />
      </Secao>

      <Secao titulo={t("sobre.secoes.disciplinas")}>
        <Disciplinas />
      </Secao>

      <Secao titulo={t("sobre.secoes.vivencia")} cmd={comando("habilidades")}>
        <Vivencia />
      </Secao>

      <Secao titulo={t("sobre.secoes.clientes")} cmd={comando("projetos")}>
        <Clientes />
      </Secao>

      <Secao titulo={t("sobre.secoes.pessoal")}>
        <Pessoal />
        <Passaporte />
      </Secao>

      <nav className="sobre-rodape" aria-label={t("sobre.veja_tambem")}>
        <span className="sobre-rodape-rotulo">{t("sobre.veja_tambem")}</span>
        {vejaTambem.map((nome) => (
          <code key={nome}>{comando(nome)}</code>
        ))}
      </nav>
    </article>
  );
};

export default SobreMim;
