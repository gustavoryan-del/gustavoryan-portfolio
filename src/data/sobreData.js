import { BR } from "country-flag-icons/react/3x2";

// Dados do comando "sobre".
//
// Aqui ficam só a estrutura, os links, os anos e os logos. Os textos
// (cargos, descrições, nomes traduzidos) ficam no i18n, em sobre.<seção>.<id>.

// Ano de início da graduação.
export const DEV_DESDE = 2026;
export const NASCIMENTO = { ano: 2007, mes: 1, dia: 1 };

export const QUICK_STATS = [
  { id: "puc", valor: "1" },
  { id: "futsal", valor: "14" },
  { id: "stack", valor: "6" },
];

// Comandos com nome em português e o alias em inglês (ver commands.js),
// para as dicas "$ comando" aparecerem no idioma da página
export const COMANDO_EN = {
  experiencias: "experience",
  habilidades: "skills",
  projetos: "projects",
  curriculo: "resume",
  contato: "contact",
};

// O que faço hoje (sobre.hoje.<id>.cargo | org | detalhe)
//   logo   imagem em /public; sem logo, usa o ícone na cor `cor`
export const hoje = [
  {
    id: "puc",
    logo: "/logos/puc.jpg",
    url: "https://www.pucminas.br/",
  },
];

// Formação, separada da atuação.
export const TRABALHOS_FINAIS = "";

export const formacao = [
  {
    id: "graduacao",
    inicio: 2026,
    fim: null,
    logo: "/logos/puc.jpg",
    url: "https://www.pucminas.br/",
  },
  {
    id: "basica",
    inicio: 2019,
    fim: 2025,
    logo: "/logos/csa-logo.png",
    url: "https://www.colegiosantoantonio.com.br/",
  },
];

export const disciplinas = [
  { id: "programacao_modular_teorica", nome: "Programação Modular (Teórica)", semestres: ["2026.2"] },
  { id: "programacao_modular_laboratorio", nome: "Programação Modular (Laboratório)", semestres: ["2026.2"] },
  { id: "arquitetura_de_computadores", nome: "Arquitetura de Computadores", semestres: ["2026.2"] },
  { id: "calculo_i", nome: "Cálculo I", semestres: ["2026.2"] },
  { id: "trabalho_interdisciplinar", nome: "Trabalho Interdisciplinar", semestres: ["2026.2"] },
  { id: "interacao_humano_computador", nome: "Interação Humano-Computador", semestres: ["2026.2"] },
  { id: "metodologia_de_extensao", nome: "Metodologia de Extensão", semestres: ["2026.2"] },
  { id: "introducao_a_pesquisa", nome: "Introdução à Pesquisa", semestres: ["2026.2"] },
  { id: "desenvolvimento_e_integracao_de_aplicacoes_web", nome: "Desenvolvimento e Integração de Aplicações Web", semestres: ["2026.2"] },
  { id: "introducao_a_algoritmos_teorica", nome: "Introdução a Algoritmos (Teórica)", semestres: ["2026.1"] },
  { id: "introducao_a_algoritmos_laboratorio", nome: "Introdução a Algoritmos (Laboratório)", semestres: ["2026.1"] },
  { id: "computabilidade", nome: "Computabilidade", semestres: ["2026.1"] },
  { id: "desenvolvimento_de_interfaces_web", nome: "Desenvolvimento de Interfaces Web", semestres: ["2026.1"] },
  { id: "filosofia_logica_e_pensamento_critico", nome: "Filosofia: Lógica e Pensamento Crítico", semestres: ["2026.1"] },
  { id: "fundamentos_de_engenharia_de_software", nome: "Fundamentos de Engenharia de Software", semestres: ["2026.1"] },
  { id: "introducao_a_computacao", nome: "Introdução à Computação", semestres: ["2026.1"] },
];

// Vivência (sobre.vivencia.<id>)
export const vivencia = [
  { id: "desenvolvimento_web" },
  { id: "trabalho_em_equipe" },
  { id: "raciocinio_logico" },
  { id: "tomada_de_decisao" },
  { id: "disciplina" },
  { id: "foco_em_resultados" },
];

// Empresas e instituições para as quais já desenvolvi software, na ordem do
// README do GitHub (sobre.clientes.<id>.nome | desc; desc aparece no title)
export const clientes = [
  { id: "icei", url: "https://icei.pucminas.br/" },
];

/* ---------- Fora do terminal ---------- */

export const GALO_URL = "https://www.atletico.com.br/";

// Hobbies (sobre.pessoal.hobbies.<id>); o ícone é escolhido no SobreMim.jsx
export const hobbies = [
  { id: "futsal", url: "" },
  { id: "valorant", url: "https://playvalorant.com/" },
  { id: "xadrez", url: "https://www.chess.com/" },
];

// Séries: nomes originais, não traduzidos
export const serieFavorita = { nome: "Breaking Bad", url: "https://www.imdb.com/title/tt0903747/" };

export const assistindo = [
  { nome: "The Blacklist", url: "https://www.imdb.com/title/tt2741602/" },
  { nome: "BoJack Horseman", url: "https://www.imdb.com/title/tt3398228/" },
];

// Lugares que já visitei, por continente, na ordem em que aparecem.
//   id        chave do nome (sobre.pessoal.lugares.<id>)
//   sigla     código ISO do país, no title da bandeira (Dubai e Abu Dhabi
//             são dois emirados dos Emirados Árabes Unidos: os dois são AE)
//   Bandeira  componente do country-flag-icons; importe o novo país lá em
//             cima (import nomeado: só as bandeiras usadas entram no bundle)
//   cor       token da cor do continente (barra e legenda)
export const continentes = [
  {
    id: "america_do_sul",
    cor: "--success",
    lugares: [{ id: "brasil", sigla: "BR", Bandeira: BR }],
  },
];

// Links do rodapé "veja também"
export const vejaTambem = [
  "experiencias",
  "projetos",
  "curriculo",
  "contato",
];
