import { createI18n } from 'vue-i18n'
import en from '@/locales/en';
import fr from '@/locales/fr';

export type MessageSchema = typeof fr;

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n<[MessageSchema], 'fr' | 'en'>({
    legacy: false,
    globalInjection: true,
    locale: 'fr',
    messages: {
      en,
      fr,
    },
  })

  vueApp.use(i18n)
})