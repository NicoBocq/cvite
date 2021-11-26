import en from '../locales/en.json'
import fr from '../locales/fr.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages:
    {
      en,
      fr
    }
})

export {
  i18n
}
