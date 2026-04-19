document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("formulario");
  const respuesta = document.getElementById("respuesta");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const data = { nombre, email, mensaje };

    try {
      const res = await fetch("https://vicmar-pro-3.onrender.com/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {

        // ✅ Mensaje en pantalla
        if (respuesta) {
          respuesta.innerText = "✅ Enviado correctamente. Te redirigimos a WhatsApp...";
        }

        // 📲 WhatsApp automático (más profesional)
        const texto = `Hola, soy ${nombre}. Estoy interesado en los servicios de Vicmar Services. Necesito: ${mensaje}`;
        const url = `https://wa.me/593969054410?text=${encodeURIComponent(texto)}`;

        setTimeout(() => {
          window.open(url, "_blank");
        }, 1000);

        form.reset();

      } else {
        if (respuesta) {
          respuesta.innerText = "❌ Error al enviar. Intenta nuevamente.";
        }
      }

    } catch (error) {
      if (respuesta) {
        respuesta.innerText = "⚠️ Error de conexión con el servidor.";
      }
    }
  });

});
