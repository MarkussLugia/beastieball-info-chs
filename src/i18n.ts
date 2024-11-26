import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      zh: {
        translation: {
          playdex: { title: "招式图鉴" },
          beastiepedia: {
            title: "Beastie 图鉴",
            noSelected: { 
              prompt: "未选中 Beastie",
              sidebarVisible: "在左侧栏选中一个 Beastie 以查看详情",
              sidebarHidden: "打开左侧栏选择一个 Beastie 以查看详情",
            },
          },
          map: { title: "地图" },
          teams: { title: "推荐的配队" },
        },
      },
    },
    lng: "zh",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
