import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        download: 'Download'
      }
    },
    fr: {
      message: {
        download: 'Télécharger'
      }
    }
  }
})

export default i18n
