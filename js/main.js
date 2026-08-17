/* =====================================================
   VICMAR SERVICES
   MAIN.JS
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector(".nav-menu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("active");

        }
    );


    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("active");

            }
        );

    });

}


/* ================= FORMULARIO ================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const message =
                document.getElementById("formMessage");

            const button =
                contactForm.querySelector("button");


            button.disabled = true;

            button.textContent =
                "Enviando...";


            const formData =
                new FormData(contactForm);


            const data = {

                nombre:
                    formData.get("nombre"),

                telefono:
                    formData.get("telefono"),

                email:
                    formData.get("email"),

                servicio:
                    formData.get("servicio"),

                mensaje:
                    formData.get("mensaje")

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
                        "Error al enviar"
                    );

                }


                message.textContent =
                    "✓ Solicitud enviada correctamente. Nos pondremos en contacto contigo.";

                message.style.color =
                    "#16884a";


                contactForm.reset();


            } catch (error) {


                message.textContent =
                    "No pudimos enviar el formulario. Puedes contactarnos directamente por WhatsApp.";

                message.style.color =
                    "#c0392b";


            } finally {


                button.disabled =
                    false;

                button.textContent =
                    "Enviar solicitud";

            }

        }
    );

}


/* ================= ANIMACIÓN SUAVE ================= */

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".service-card, .project-card, .advantage, .value-card"
    )
    .forEach(
        function (element) {

            observer.observe(element);

        }
    );
