app.component('language-selector', {
    props: {
        langs: { type: Array, required: true },
        default: { type: String, required: true },
    },
    template:
        /*html*/
        `
        <div class="toolbar-elem" 
                v-for="lang in langs"
                v-if="lang !== this.selected"
                @click="changed(lang)"
            >{{ lang }}
        </div>
    `,
    data() {
        return {
            selected: ''
        }
    },
    created(){
        this.selected = this.default;
    },
    methods: {
        changed_old(evt) {
            this.$emit('changed', evt.target.value)
        },
        changed(lang){
            this.selected = lang
            this.$emit('changed', lang)
        }
    },
})