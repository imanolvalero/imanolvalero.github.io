app.component('toolbar', {
    props: {
        langs: { type: Array, required: true },
        buttons: { type: Array, required: true },
        data: { type: Object, required: true },
        contact: { type: Object, required: true },
    },
    template:
        /*html*/
        `
        <div class="toolbar-elem" 
                v-for="lang in langs"
                @click="changed(lang)"
            >{{ lang }}
        </div>
        <div class="toolbar-elem"
             v-bind:style="{ 'background-image': 'url('+button.icon+')' }"
                v-for="(button, index) in buttons"
                @click="trigger(index)"
            >
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
        changed(lang){
            this.selected = lang
            this.$emit('changed', lang)
        },
        trigger(index){
            this.buttons[index].fn(this.data, this.contact);
        }
    },
})