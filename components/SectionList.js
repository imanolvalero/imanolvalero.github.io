app.component('section-list', {
    props: {
        sections: {
            type: Array,
            required: true
        }
    },
    template:
      /*html*/
      `
      <div class="section-container" 
          v-for="(elem, index) in sections"
      >
          <section-view
              v-if="sections.length"
              :title="elem.title"
              :items="elem.items"
          >
          </section-view>
      </div>
      `
})