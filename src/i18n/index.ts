import { createI18n } from 'vue-i18n'
import { watch } from 'vue'

import en from './en.json'
import es from './es.json'

const savedLocale = localStorage.getItem('locale') === 'es' ? 'es' : 'en'

const i18n = createI18n({
  legacy: false,

  locale: savedLocale,

  fallbackLocale: 'en',

  messages: {
    en,
    es,
  },
})

watch(
  i18n.global.locale,
  (locale) => {
    document.documentElement.lang = locale
  },
  { immediate: true },
)

export default i18n
