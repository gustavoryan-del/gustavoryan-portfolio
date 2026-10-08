import { canvasSubcommands } from './data/canvasSections';

// Comandos do terminal. "subcommands" alimenta o autocomplete (Tab) da
// segunda palavra, ex.: "tema --c" + Tab → "tema --claro".
export const commandList = {
  sobre: {
    name: 'sobre',
    aliases: ['about'],
  },
  ajuda: {
    name: 'ajuda',
    aliases: ['help'],
  },
  experiencias: {
    name: 'experiencias',
    aliases: ['experience', 'xp'],
  },
  contato: {
    name: 'contato',
    aliases: ['contact'],
  },
  curriculo: {
    name: 'curriculo',
    aliases: ['resume'],
  },
  canvas: {
    name: 'canvas',
    aliases: ['tarefas', 'prazos', 'entregas'],
    // Tarefas, prazos e entregas das minhas disciplinas no Canvas.
    // Seções: canvas --resumo | --tarefas | --agenda | --tudo; filtros: diw,
    // ti5, coreu, lourdes, g1... (ver data/canvasSections.js)
    subcommands: canvasSubcommands,
  },
  habilidades: {
    name: 'habilidades',
    aliases: ['skills'],
    // Estilos: skills --terminal | --cards | --lista | --globo (ver data/skillSkins.js)
    subcommands: ['--terminal', '--cards', '--lista', '--list', '--globo', '--globe'],
  },
  limpar: {
    name: 'limpar',
    aliases: ['clear'],
  },
  tema: {
    name: 'tema',
    aliases: ['theme'],
    // Sem opção, troca na ordem escuro → claro → galo
    subcommands: ['--escuro', '--claro', '--galo', '--dark', '--light'],
  },
  projetos: {
    name: 'projetos',
    aliases: ['projects'],
  },
  github: {
    name: 'github',
    aliases: ['git', 'api'],
  },
  spotify: {
    name: 'spotify',
    aliases: ['music'],
  },
  stats: {
    name: 'stats',
    aliases: ['githubstats', 'ghstats'],
    // Gráficos: stats --resumo | --linguagens | --atividade | --horarios | --repos | --tudo
    // (ver data/gitHubStatsSections.js)
    subcommands: [
      '--resumo',
      '--linguagens',
      '--atividade',
      '--horarios',
      '--repos',
      '--tudo',
      '--summary',
      '--languages',
      '--activity',
      '--hours',
      '--all',
    ],
  },
  wakatime: {
    name: 'wakatime',
    aliases: ['time'],
    // Estilos: wakatime --terminal | --grade | --lista | --cards (ver data/wakaTimeSkins.js)
    subcommands: ['--terminal', '--grade', '--grid', '--lista', '--list', '--cards'],
  },
  neofetch: {
    name: 'neofetch',
    aliases: ['fetch', 'galo'],
  },
  guestbook: {
    name: 'guestbook',
    aliases: ['guest', 'book'],
    subcommands: ['add', 'list', 'help'],
  },
  design: {
    name: 'design',
    aliases: ['ds', 'designsystem'],
  },
};
