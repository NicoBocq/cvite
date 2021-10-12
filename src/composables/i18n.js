import en from '../locales/en.json'
import { createI18n } from 'vue-i18n'
// import { lang } from '@/modules/uiStore'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages:
    {
      en,
      fr: () => import('../locales/fr.json')
    }
})

export {
  i18n
}
