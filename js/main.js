/* =========================================================
   VICMAR SERVICES
   MAIN.JS
========================================================= */


/* =========================================================
   MENÚ MÓVIL
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mainNav.classList.toggle("nav-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });


    /* Cerrar menú al seleccionar una página */

    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("nav-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================================
   FORMULARIO DE CONTACTO
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const formMessage =
                document.getElementById("formMessage");

            const button =
                contactForm.querySelector(
                    "button[type='submit']"
                );


            button.disabled = true;

            button.textContent =
                "Enviando...";


            formMessage.textContent = "";

            formMessage.className =
                "form-message";


            const data = {

                nombre:
                    document.getElementById(
                        "nombre"
                    ).value.trim(),

                telefono:
                    document.getElementById(
                        "telefono"
                    ).value.trim(),

                correo:
                    document.getElementById(
                        "correo"
                    ).value.trim(),

                mensaje:
                    document.getElementById(
                        "mensaje"
                    ).value.trim()

            };


            try {

                const response =
                    await fetch(
                        "https://vicmar-pro-3.onrender.com/contacto",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(data)

                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Error en el servidor"
                    );

                }


                formMessage.textContent =
                    "Solicitud enviada correctamente. Nos pondremos en contacto contigo.";

                formMessage.classList.add(
                    "success"
                );

                contactForm.reset();


            } catch (error) {

                console.error(
                    "Error:",
                    error
                );


                formMessage.textContent =
                    "No fue posible enviar la solicitud. Escríbenos directamente por WhatsApp.";

                formMessage.classList.add(
                    "error"
                );

            }


            button.disabled = false;

            button.textContent =
                "Enviar solicitud";

        }
    );

}
