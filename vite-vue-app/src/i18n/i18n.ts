import { createI18n } from 'vue-i18n'
import messages from "./messages/messages";

export default createI18n({
    legacy: false,
    locale: 'fr',
    messages
});