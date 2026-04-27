import type { Resources, defaultNS } from "./common/i18n"

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: Resources
  }
}
