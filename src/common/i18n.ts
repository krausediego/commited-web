import i18n, { type InitOptions } from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend, { type HttpBackendOptions } from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import { isProduction } from "./utils"
import type enTranslations from "../../public/locales/en/translations.json"

export type Resources = {
  [defaultNS]: typeof enTranslations
}

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
    loadPath: "/locales/{{lng}}/translations.json",
  },
}

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init<HttpBackendOptions>(i18nOptions)
