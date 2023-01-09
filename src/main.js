import translationEN from '../translation/en.js'
import translationZH from '../translation/zh.js'
let messages = {};
messages['en'] = { message: translationEN.message };
messages['zh'] = { message: translationZH.message };
console.log(messages);
const i18n = VueI18n.createI18n({
    locale: 'zh', // set locale
    fallbackLocale: 'en',
    messages, // set locale messages
});

const app = Vue.createApp({
    created() { },
    data() {
        return {
        };
    },
    mounted() {
    },
    computed: {
    },
    methods: {
        init() {
            sth();
        },
    }
});
app.use(i18n);
app.mount('#app');
console.log("Mount");