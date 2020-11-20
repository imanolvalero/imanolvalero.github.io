app.component('section-view', {
    props: {
        title: { type: String, required: true },
        items: { type: Array, required: true }
    },
    template:
        /*html*/
        `
        <h2>{{ title }}</h2> 
        <ul>
            <li v-for="(item, index) in items">
            {{item}}
            </li>
        </ul>
        
        `
})