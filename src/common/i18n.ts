import i18n, { type InitOptions } from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend, { type HttpBackendOptions } from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import { isProduction } from "./utils"

export const defaultNS = "translations"

const i18nOptions: InitOptions<HttpBackendOptions> = {
  defaultNS,
  ns: [defaultNS],
  debug: !isProduction,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "/locales/{{lng}}/translations.json", // funciona em dev e prod
  },
}

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init<HttpBackendOptions>(i18nOptions)
