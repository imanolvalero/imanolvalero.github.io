const app = Vue.createApp({
    data() {
        return {
            lang: 'es',
            langs: [],
            data: {},
        }
    },
    created: function () {
        this.langs = Object.keys(translations)
        this.translate()
    },
    methods: {
        translate(lang) {
            this.lang = lang || 'es' 
            this.data = translations[this.lang]
            window.document.title = contact.name + ' - ' + this.data.job
        },
        map(){
            window.open('https://www.google.es/maps?q=' + contact.maps);
        },
        call(){
            window.location = "tel:" + contact.tel;
        },
        email(){
            window.location = "mailto:" + contact.email + 
                   '?subject=' + this.data.email.subject +
                   '&body=' + this.data.email.body + '";'
        }
    }
})