const form = document.getElementById("formulario");

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

      // 📲 MENSAJE AUTOMÁTICO WHATSAPP
      const texto = `Hola, soy ${nombre}. Necesito información sobre sus servicios. Este es mi requerimiento: ${mensaje}`;
      const url = `https://wa.me/593969054410?text=${encodeURIComponent(texto)}`;

      window.open(url, "_blank");

      form.reset();

    } else {
      alert("Error al enviar formulario");
    }

  } catch (error) {
    alert("Error de conexión");
  }
});
