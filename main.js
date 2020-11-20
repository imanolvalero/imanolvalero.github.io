const getTranslatedText = function (lang) {
    const langs = {
        'en': {
            name: "Imanol Valero",
            job: "Full Stack Analyst Developer",
            hi: "Hi!",
            desc: "I'm Imanol Valero, Full Stack Analyst Developer, oriented to process optimization. I've been integrating information technologies in business process management for more than 20 years, in which I've acquired wide experience in the definition, design and implementation of solutions that automate and ensure the procedures defined in the companies.",
            sections: [
                {
                    title: "Skills",
                    items: [
                        "Analysis of needs and the cost of different ways to satisfy them.",
                        "Integration of new necessary software with the current one.",
                        "Ad-hoc software development if necessary.",
                        "Coordination of the work of multidisciplinary groups.",
                        "Detection of unreported needs.",
                        "Standardization of business data models for their exploitation."
                    ]
                }, {
                    title: "Resources",
                    items: [
                        "Systems: Linux, Windows, Docker.",
                        "Development: C, AutoLisp, Rust, VB, Python, Scripting.",
                        "Backend: Nginx, CherryPy, Flask.",
                        "Frontend: HTML5, CSS3, vanilla javascript, jquery, vue.js, wasm.",
                        "DBs: PostgreSQL, MySql/ MariaDB, MS SqlServer.",
                        "AMQP: RabbitMQ.",
                        "VCS: Git."
                    ] 
                } , {
                    title: "Experience",
                    items: [
                        "Access control by magnetic card.",
                        "Programming trainer.",
                        "ERPs implementation.",
                        "Custom CRM development.",
                        "Data capture in custom plant.",
                        "Terminal system virtualization.",
                        "Consolidation of data from different plants with different management software.",
                        "Order book management.",
                        "Quality control at warehouse entrance.",
                        "Compile from CAD to CNC.",
                        "CAD blueprints automation",
                        "Stabilization of IT resources in companies nationwide."
                    ]
                }
            ]
        },
        'es': {
            name: "Imanol Valero",
            job: "Full Stack Analyst Developer",
            hi: "Hola!",
            desc: "Soy Imanol Valero, Full Stack Analyst Developer, orientado a la optimización de procesos. Llevo más de 20 años integrando tecnologías de informacion en procesos de gestión de negocio, en los que he adquirido una amplia experiencia en la definición, diseño e implementación de soluciones que automatizan y aseguran los procedimientos definidos en la empresas.",
            sections: [
                {
                    title: "Habilidades",
                    items: [
                        "Análisis de necesidades y del coste de diferentes formas de satisfacerlas.",
                        "Integración de nuevo software necesario con el actual.",
                        "Desarrollo de software ad-hoc en caso de ser necesario.",
                        "Coordinación del trabajo de grupos mutidisciplinares.",
                        "Detección de necesidades no evidenciadas.",
                        "Normalización de modelos de datos del negocio para su explotación."
                    ]
                }, {
                    title: "Recursos",
                    items: [
                        "Sistemas: Linux, Windows, Docker.",
                        "Desarrollo: C, AutoLisp, Rust, VB, Python, Scripting.",
                        "Backend: Nginx, CherryPy, Flask.",
                        "Frontend: HTML5, CSS3, vanilla javascript, jquery, vue.js, wasm.",
                        "BBDD: PostgreSQL, MySql/ MariaDB, MS SqlServer.",
                        "Mensajeria: RabbitMQ.",
                        "VCS: Git."
                    ] 
                } , {
                    title: "Experiencia",
                    items: [
                        "Control de acceso por tarjeta magnética.",
                        "Formador de programación.",
                        "Implantación ERPs.",
                        "Desarrollo de CRM a medida.",
                        "Captura de datos en planta a medida.",
                        "Virtualización de sistema de terminales.",
                        "Consolidación de datos de diferentes plantas con diferentes softwares de gestión.",
                        "Gestión de cartera de pedidos.",
                        "Control de calidad en entrada de almacén.",
                        "Traducción de CAD a CNC.",
                        "Automatización de planos de CAD.",
                        "Estabilización de recursos informática en empresa a nivel nacional."
                    ]
                }
            ]
        }
    }
    return langs[lang] || langs['es']
}

const app = Vue.createApp({
    data() {
        return {
            lang: 'es',
            data: {}
        }
    },
    created: function () {
        this.translate()
    },
    methods: {
        translate(evt) {
            if (evt) this.lang = evt.target.value
            this.data = getTranslatedText(this.lang)
            window.document.title = this.data.name + ' - ' + this.data.job
        }
    }
})
