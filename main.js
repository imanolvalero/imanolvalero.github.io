const app = Vue.createApp({
    data() {
        return {
            lang: 'es',
            langs: [],
            data: {sections:[]},
            contact: {},
            buttons: [
                {icon: '/assets/imgs/tel.png', 
                 fn: (data, contact) => 
                     window.location = 'tel:' + contact.tel},
                {icon: '/assets/imgs/mail.png',
                 fn: (data, contact) => 
                     window.location = 'mailto:' + contact.email + 
                                                '?subject=' + data.email.subject +
                                                '&body=' + data.email.body},
                {icon: '/assets/imgs/map.png', 
                 fn: (data, contact) => 
                     window.open('https://www.google.es/maps?q=' + contact.maps)},
            ],
        }
    },
    created: function () {
        this.translate()
    },
    methods: {
        translate(lang) {
            this.lang = lang || 'es'
            const tmp = async (lang) => {
                const lib = await import('./assets/data.js');
                await lib.default()
                return {
                    langs: JSON.parse(lib.get_languages()),
                    contact: JSON.parse(lib.get_contact_data()),
                    data: JSON.parse(lib.get_translated_data(lang))
                }
            }
            tmp(this.lang).then(data => {
                this.langs = data.langs
                this.contact = data.contact
                this.data = data.data
                window.document.title = this.contact.name + ' - ' + this.data.job
    
            })
                
        }
    }
})