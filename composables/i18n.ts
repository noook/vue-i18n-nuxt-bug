import { useI18n as i18n } from 'vue-i18n'
import { MessageSchema } from '@/plugins/i18n'

export const useI18n = () => {
  return i18n<{ message: MessageSchema }, 'fr' | 'en'>()
}