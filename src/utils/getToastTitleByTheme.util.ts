import { EStatusTheme, StatusTranslations, TLang } from "../types";

const getToastTitleByTheme = (theme: EStatusTheme, lang?: TLang) => {
  const title: StatusTranslations = {
    [EStatusTheme.SUCCESS]: {
      en: "Success",
      es: "Éxito",
      pt: "Sucesso",
    },
    [EStatusTheme.CLIENT_ERROR]: {
      en: "Client error",
      es: "Error de cliente",
      pt: "Erro de cliente",
    },
    [EStatusTheme.SERVER_ERROR]: {
      en: "Server error",
      es: "Error con el servidor",
      pt: "Erro de servidor",
    },
    [EStatusTheme.UNKNOWN]: {
      pt: "Status desconhecido",
      es: "Status desconocido",
      en: "Unknown status",
    },
  };

  if (lang) {
    return title[theme][lang];
  }

  return title[theme]["en"] || "";
};

export default getToastTitleByTheme;
