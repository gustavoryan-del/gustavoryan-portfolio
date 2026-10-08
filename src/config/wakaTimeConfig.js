// wakaTimeConfig.js
// Os estilos --terminal (padrão), --grade e --lista leem a API pública do WakaTime
// (https://wakatime.com/developers). O perfil precisa estar público em
// https://wakatime.com/settings/profile; assim nenhuma chave é necessária.
//
// O WakaTime não libera CORS, então o navegador chama um caminho do próprio
// site (API_PATH) e quem repassa para wakatime.com/api/v1/users/<USERNAME> é:
//   • npm run dev / preview → proxy do vite.config.js (lê este arquivo)
//   • Vercel                → rewrite do vercel.json (troque o usuário lá também)
const WAKATIME_CONFIG = {
  USERNAME:
    import.meta.env?.VITE_WAKATIME_ID ??
    (typeof process !== "undefined" ? process.env.VITE_WAKATIME_ID : undefined) ??
    "43529b87-73e1-4546-a267-d2bf1489e108",
  API_PATH: "/api/wakatime",
  RANGE: "all_time", // mesmo período dos cards
  PROFILE_URL: "https://wakatime.com/@43529b87-73e1-4546-a267-d2bf1489e108",

  // Quantos itens cada estilo mostra (o resto vira "+ N linguagens")
  LIMITS: {
    grade: 12,
    lista: 10,
    terminal: { languages: 8, editors: 4, categories: 5, operatingSystems: 3 },
  },

  // Linguagens que não devem aparecer, ex.: ["Text", "Other"]
  HIDDEN_LANGUAGES: [],
};

export default WAKATIME_CONFIG;
