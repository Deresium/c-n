import { createI18n } from 'vue-i18n'
import messages from "@/i18n/messages/messages";

export default createI18n({
    legacy: false,
    locale: 'fr',
    messages
})