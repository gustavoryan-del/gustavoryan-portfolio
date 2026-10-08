import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  IoLocationOutline,
  IoSchool,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoFootballOutline,
  IoBookOutline,
  IoMailOutline,
  IoLogoGithub,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { ARAMUNI_ASCII } from "../data/brandData";
import AramuniLogo from "./AramuniLogo";
import { useTheme } from "../theme/themeContext";
import "./BoasVindas.css";

const BoasVindas = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const lang = i18n.language.startsWith("en") ? "en" : "pt";
  const name = t("boasvindas.nome");
  const title = t("boasvindas.titulo");
  const sequence = [name, 1000, `${name} ${title}`, 2000];

  return (
    <div className="welcome-container">
      {/* Logo à esquerda do banner: as duas crescem juntas (mesma fonte) */}
      <div className="welcome-brand">
        {/* No tema galo, o escudo do Atlético entra no lugar da logo */}
        {theme === "galo" ? (
          <img
            src="/galo/escudo-cam.webp"
            alt={t("boasvindas.escudo_alt")}
            className="welcome-logo welcome-escudo"
            width="480"
            height="714"
          />
        ) : (
          <AramuniLogo className="welcome-logo" />
        )}
        <pre className="aramuni-ascii">{ARAMUNI_ASCII}</pre>
      </div>
      {/* key muda quando o idioma muda, forçando recriação */}
      <TypeAnimation
        key={lang}
        sequence={sequence}
        wrapper="h1"
        cursor={true}
        repeat={0}
        className="name-animation"
      />
      <div className="static-welcome">
        <p className="welcome-title">{t("boasvindas.bemvindo")}</p>
        <hr className="divider" />
        <p className="welcome-subtitle">{t("boasvindas.subtitulo")}</p>
        <ul className="info-list">
          <li>
            <a
              href="https://www.pucminas.br/campus/coracao-eucaristico/ensino/graduacao/Paginas/Engenharia-de-Software.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <IoSchoolOutline className="icon" style={{ color: "var(--icon-school)" }} />
              {t("boasvindas.cargo1")}
            </a>
          </li>
          {/* Dois links na mesma linha: o item não é um <a>, cada nome é */}
         

          <li>
            <a
              href="https://atletico.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <IoFootballOutline className="icon" />
              {t("boasvindas.esporte")}
            </a>
          </li>
          <li>
            <a
              href="https://www.pucminas.br/campus/coracao-eucaristico/Paginas/como-chegar.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <IoLocationOutline
                className="icon"
                style={{ color: "var(--icon-location)" }}
              />
              {t("boasvindas.local")}
            </a>
          </li>
          <li>
            <a
              href="mailto:gryangomesguedes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <IoMailOutline className="icon" style={{ color: "var(--icon-mail-gmail)" }} />
              gryangomesguedes@gmail.com
            </a>
          </li>
          <li>
            <a
              href="mailto:gustavo.guedes@sga.pucminas.br"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <IoMailOutline className="icon" style={{ color: "var(--icon-mail-puc)" }} />
              gustavo.guedes@sga.pucminas.br
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gustavoryan-del/gustavoryan-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <IoLogoGithub className="icon" style={{ color: "var(--icon-github)" }} />
              GitHub Portfolio
            </a>
          </li>
        </ul>
        <p className="navegue-text">{t("boasvindas.ajuda")}</p>
      </div>
    </div>
  );
};

export default BoasVindas;
