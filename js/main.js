/* =========================================================
   VICMAR SERVICES
   MAIN.JS - JAVASCRIPT MAESTRO
   Mantenimiento Integral | Quito - Ecuador
   ========================================================= */

"use strict";


/* =========================================================
   01. INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    inicializarMenu();
    inicializarBuscadorServicios();
    inicializarFiltrosServicios();
    inicializarEnlacesSuaves();
    inicializarAnimaciones();
    inicializarFormularioContacto();
    inicializarAnio();
    inicializarHeaderScroll();
    inicializarBotonesServicio();

});


/* =========================================================
   02. MENU MOVIL
   ========================================================= */

function inicializarMenu() {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mainNav =
        document.querySelector(".main-nav");

    if (!menuToggle || !mainNav) {
        return;
    }


    menuToggle.addEventListener("click", function () {

        const abierto =
            mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            abierto ? "true" : "false"
        );


        const icono =
            menuToggle.querySelector("i");

        if (icono) {

            if (abierto) {

                icono.classList.remove(
                    "fa-bars"
                );

                icono.classList.add(
                    "fa-xmark"
                );

            } else {

                icono.classList.remove(
                    "fa-xmark"
                );

                icono.classList.add(
                    "fa-bars"
                );

            }

        }

    });


    /* Cerrar menú al seleccionar una opción */

    const enlaces =
        mainNav.querySelectorAll("a");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener(
            "click",
            function () {

                mainNav.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icono =
                    menuToggle.querySelector("i");

                if (icono) {

                    icono.classList.remove(
                        "fa-xmark"
                    );

                    icono.classList.add(
                        "fa-bars"
                    );

                }

            }
        );

    });


    /* Cerrar menú al cambiar a escritorio */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 760) {

                mainNav.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icono =
                    menuToggle.querySelector("i");

                if (icono) {

                    icono.classList.remove(
                        "fa-xmark"
                    );

                    icono.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );

}


/* =========================================================
   03. BUSCADOR DE SERVICIOS
   ========================================================= */

function inicializarBuscadorServicios() {

    const input =
        document.getElementById(
            "inputBuscar"
        );

    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        function () {

            filtrarServicios();

        }
    );

}


/* =========================================================
   04. FILTROS DE SERVICIOS
   ========================================================= */

function inicializarFiltrosServicios() {

    const botones =
        document.querySelectorAll(
            ".btn-filtro"
        );

    if (!botones.length) {
        return;
    }


    botones.forEach(function (boton) {

        boton.addEventListener(
            "click",
            function () {

                botones.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                filtrarServicios(
                    this.dataset.filter || "todos"
                );

            }
        );

    });

}


/* =========================================================
   05. FUNCION PRINCIPAL DE FILTRADO
   ========================================================= */

function filtrarServicios(
    categoriaForzada = null
) {

    const input =
        document.getElementById(
            "inputBuscar"
        );

    const tarjetas =
        document.querySelectorAll(
            ".servicio-card"
        );

    const sinResultados =
        document.getElementById(
            "sinResultados"
        );


    if (!tarjetas.length) {
        return;
    }


    let categoria = "todos";


    const filtroActivo =
        document.querySelector(
            ".btn-filtro.active"
        );


    if (categoriaForzada) {

        categoria =
            categoriaForzada;

    } else if (filtroActivo) {

        categoria =
            filtroActivo.dataset.filter ||
            "todos";

    }


    const texto =
        input
            ? input.value
                .toLowerCase()
                .trim()
            : "";


    let resultados = 0;


    tarjetas.forEach(
        function (tarjeta) {

            const categoriaTarjeta =
                (
                    tarjeta.dataset.categoria ||
                    ""
                ).toLowerCase();


            const palabras =
                (
                    tarjeta.dataset.search ||
                    ""
                ).toLowerCase();


            const contenido =
                tarjeta.innerText
                    .toLowerCase();


            const coincideCategoria =
                categoria === "todos" ||
                categoriaTarjeta === categoria;


            const coincideTexto =
                texto === "" ||
                palabras.includes(texto) ||
                contenido.includes(texto);


            if (
                coincideCategoria &&
                coincideTexto
            ) {

                tarjeta.style.display =
                    "flex";

                resultados++;

            } else {

                tarjeta.style.display =
                    "none";

            }

        }
    );


    if (sinResultados) {

        sinResultados.style.display =
            resultados === 0
                ? "block"
                : "none";

    }

}


/* =========================================================
   06. ENLACES SUAVES
   ========================================================= */

function inicializarEnlacesSuaves() {

    const enlaces =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    enlaces.forEach(function (enlace) {

        enlace.addEventListener(
            "click",
            function (evento) {

                const destino =
                    this.getAttribute("href");


                if (
                    !destino ||
                    destino === "#"
                ) {

                    return;

                }


                const elemento =
                    document.querySelector(
                        destino
                    );


                if (!elemento) {
                    return;
                }


                evento.preventDefault();


                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   07. ANIMACIONES AL HACER SCROLL
   ========================================================= */

function inicializarAnimaciones() {

    const elementos =
        document.querySelectorAll(
            ".servicio-card, .confianza-item, .card"
        );


    if (!elementos.length) {
        return;
    }


    /* Si el navegador no soporta IntersectionObserver */

    if (
        !("IntersectionObserver" in window)
    ) {

        elementos.forEach(
            function (elemento) {

                elemento.style.opacity =
                    "1";

            }
        );

        return;

    }


    const observador =
        new IntersectionObserver(
            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "visible"
                            );

                            observador.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elementos.forEach(
        function (elemento) {

            observador.observe(
                elemento
            );

        }
    );

}


/* =========================================================
   08. FORMULARIO DE CONTACTO
   ========================================================= */

function inicializarFormularioContacto() {

    const formulario =
        document.querySelector(
            "#formContacto"
        );


    if (!formulario) {
        return;
    }


    formulario.addEventListener(
        "submit",
        async function (evento) {

            evento.preventDefault();


            const boton =
                formulario.querySelector(
                    'button[type="submit"]'
                );


            const mensaje =
                document.getElementById(
                    "mensajeFormulario"
                );


            const datos =
                new FormData(
                    formulario
                );


            const nombre =
                datos.get("nombre") || "";

            const telefono =
                datos.get("telefono") || "";

            const email =
                datos.get("email") || "";

            const servicio =
                datos.get("servicio") || "";

            const mensajeUsuario =
                datos.get("mensaje") || "";


            /* Validación básica */

            if (
                !nombre.trim() ||
                !telefono.trim() ||
                !mensajeUsuario.trim()
            ) {

                mostrarMensaje(
                    mensaje,
                    "Por favor complete los campos obligatorios.",
                    "error"
                );

                return;

            }


            /* Estado del botón */

            const textoOriginal =
                boton
                    ? boton.innerHTML
                    : "";


            if (boton) {

                boton.disabled =
                    true;

                boton.innerHTML =
                    '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

            }


            try {

                /*
                 * ENDPOINT DEL BACKEND
                 *
                 * Cambiar únicamente esta URL
                 * si el backend de Render cambia.
                 */

                const API_URL =
                    "https://vicmar-pro-3.onrender.com/contacto";


                const respuesta =
                    await fetch(
                        API_URL,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({

                                    nombre:
                                        nombre,

                                    telefono:
                                        telefono,

                                    email:
                                        email,

                                    servicio:
                                        servicio,

                                    mensaje:
                                        mensajeUsuario

                                })
                        }
                    );


                const resultado =
                    await respuesta.json()
                        .catch(
                            function () {
                                return {};
                            }
                        );


                if (!respuesta.ok) {

                    throw new Error(
                        resultado.message ||
                        "No fue posible enviar el formulario."
                    );

                }


                mostrarMensaje(
                    mensaje,
                    "Solicitud enviada correctamente. Nos pondremos en contacto con usted.",
                    "success"
                );


                formulario.reset();


            } catch (error) {

                console.error(
                    "Error de formulario:",
                    error
                );


                mostrarMensaje(
                    mensaje,
                    "No pudimos enviar la solicitud. Intente nuevamente o contáctenos directamente por WhatsApp.",
                    "error"
                );


            } finally {

                if (boton) {

                    boton.disabled =
                        false;

                    boton.innerHTML =
                        textoOriginal;

                }

            }

        }
    );

}


/* =========================================================
   09. MENSAJE DE FORMULARIO
   ========================================================= */

function mostrarMensaje(
    elemento,
    texto,
    tipo
) {

    if (!elemento) {
        return;
    }


    elemento.textContent =
        texto;


    elemento.className =
        "alert " +
        (
            tipo === "success"
                ? "alert-success"
                : "alert-error"
        );


    elemento.style.display =
        "block";


    elemento.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* =========================================================
   10. AÑO AUTOMATICO DEL FOOTER
   ========================================================= */

function inicializarAnio() {

    const elementos =
        document.querySelectorAll(
            "[data-year]"
        );


    if (!elementos.length) {
        return;
    }


    const anio =
        new Date().getFullYear();


    elementos.forEach(
        function (elemento) {

            elemento.textContent =
                anio;

        }
    );

}


/* =========================================================
   11. HEADER AL HACER SCROLL
   ========================================================= */

function inicializarHeaderScroll() {

    const header =
        document.querySelector(
            ".site-header"
        );


    if (!header) {
        return;
    }


    function actualizarHeader() {

        if (
            window.scrollY > 20
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    actualizarHeader();


    window.addEventListener(
        "scroll",
        actualizarHeader,
        {
            passive: true
        }
    );

}


/* =========================================================
   12. BOTONES DE SERVICIO
   ========================================================= */

function inicializarBotonesServicio() {

    const enlaces =
        document.querySelectorAll(
            ".servicio-link"
        );


    if (!enlaces.length) {
        return;
    }


    enlaces.forEach(
        function (enlace) {

            enlace.addEventListener(
                "click",
                function () {

                    /*
                     * Permite conservar el parámetro:
                     *
                     * contacto.html?servicio=electricidad
                     *
                     * para que contacto.html pueda
                     * identificar el servicio seleccionado.
                     */

                    const url =
                        new URL(
                            this.href,
                            window.location.origin
                        );


                    const servicio =
                        url.searchParams.get(
                            "servicio"
                        );


                    if (
                        servicio &&
                        typeof sessionStorage !==
                        "undefined"
                    ) {

                        sessionStorage.setItem(
                            "vicmar_servicio",
                            servicio
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   13. CARGAR SERVICIO EN CONTACTO
   ========================================================= */

function cargarServicioContacto() {

    const formulario =
        document.querySelector(
            "#formContacto"
        );


    if (!formulario) {
        return;
    }


    const campoServicio =
        formulario.querySelector(
            '[name="servicio"]'
        );


    if (!campoServicio) {
        return;
    }


    const parametros =
        new URLSearchParams(
            window.location.search
        );


    let servicio =
        parametros.get(
            "servicio"
        );


    if (
        !servicio &&
        typeof sessionStorage !==
        "undefined"
    ) {

        servicio =
            sessionStorage.getItem(
                "vicmar_servicio"
            );

    }


    if (!servicio) {
        return;
    }


    campoServicio.value =
        convertirServicio(
            servicio
        );

}


/* =========================================================
   14. CONVERTIR NOMBRE DEL SERVICIO
   ========================================================= */

function convertirServicio(
    servicio
) {

    const servicios = {

        electricidad:
            "Electricidad",

        plomeria:
            "Plomería",

        pintura:
            "Pintura",

        "aluminio-y-vidrio":
            "Aluminio y Vidrio",

        impermeabilizacion:
            "Impermeabilización",

        gypsum:
            "Gypsum y Acabados",

        mantenimiento:
            "Mantenimiento Preventivo y Correctivo"

    };


    return servicios[
        servicio
    ] || servicio;

}


/* =========================================================
   15. EJECUTAR CARGA DEL SERVICIO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        cargarServicioContacto();

    }
);


/* =========================================================
   16. PROTECCIÓN BÁSICA DE IMAGENES
   ========================================================= */

function inicializarImagenes() {

    const imagenes =
        document.querySelectorAll(
            "img"
        );


    imagenes.forEach(
        function (imagen) {

            imagen.addEventListener(
                "error",
                function () {

                    this.classList.add(
                        "imagen-error"
                    );

                }
            );

        }
    );

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        inicializarImagenes();

    }
);


/* =========================================================
   17. DETECCIÓN DE PÁGINA ACTIVA
   ========================================================= */

function marcarPaginaActual() {

    const ruta =
        window.location.pathname
            .split("/")
            .pop();


    const pagina =
        ruta === ""
            ? "index.html"
            : ruta;


    const enlaces =
        document.querySelectorAll(
            ".main-nav a"
        );


    enlaces.forEach(
        function (enlace) {

            const href =
                enlace
                    .getAttribute("href");


            if (
                href === pagina
            ) {

                enlace.classList.add(
                    "active"
                );

            }

        }
    );

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        marcarPaginaActual();

    }
);


/* =========================================================
   18. BOTON VOLVER ARRIBA
   ========================================================= */

function inicializarBotonArriba() {

    const boton =
        document.getElementById(
            "volverArriba"
        );


    if (!boton) {
        return;
    }


    function controlarBoton() {

        if (
            window.scrollY > 500
        ) {

            boton.classList.add(
                "visible"
            );

        } else {

            boton.classList.remove(
                "visible"
            );

        }

    }


    controlarBoton();


    window.addEventListener(
        "scroll",
        controlarBoton,
        {
            passive: true
        }
    );


    boton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        inicializarBotonArriba();

    }
);


/* =========================================================
   19. CONSOLA
   ========================================================= */

console.log(
    "%cVicmar Services",
    "font-size:20px;font-weight:bold;color:#0d47a1;"
);

console.log(
    "Mantenimiento integral para casas, edificios y negocios."
);
