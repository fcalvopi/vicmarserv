document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("nav-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      const nombre = document.getElementById("nombre")?.value.trim() || "";
      const telefono = document.getElementById("telefono")?.value.trim() || "";
      const mensaje = document.getElementById("mensaje")?.value.trim() || "";

      if (!nombre || !telefono || !mensaje) {
        formMessage.textContent = "Completa todos los campos antes de enviar.";
        formMessage.className = "form-message error";
        return;
      }

      const texto = `Hola Vicmar Services, soy ${nombre}. Mi celular es ${telefono}. Necesito: ${mensaje}`;
      const url = `https://wa.me/593992705273?text=${encodeURIComponent(texto)}`;

      formMessage.textContent = "Abriendo WhatsApp para completar tu solicitud...";
      formMessage.className = "form-message success";
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
});
