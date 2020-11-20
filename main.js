const app = Vue.createApp({
    data() {
        return {
            data: {
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
                            "Traducción de AutoCAD a CNC.",
                            "Estabilización de recursos informática en empresa a nivel nacional."
                        ]
                    }
                ]
            }
        }
    }
})