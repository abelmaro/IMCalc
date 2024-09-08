import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from "../i18n/translations/english.json"
import spanish from "../i18n/translations/spanish.json"
import portuguese from "../i18n/translations/portuguese.json"
import french from "../i18n/translations/french.json"
import japanese from "../i18n/translations/japanese.json"
import { STORAGE_KEYS } from "../constants/storageKeys"

const resources = {
  en: { translation: english },
  es: { translation: spanish },
  pt: { translation: portuguese },
  jp: { translation: japanese },
  fr: { translation: french }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem(STORAGE_KEYS.LANG) || 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n