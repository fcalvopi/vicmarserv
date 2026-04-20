require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// VALIDACIÓN SIMPLE
function validarDatos(data) {
    if (!data.nombre || data.nombre.length < 3) return "Nombre inválido";
    if (!data.telefono || data.telefono.length < 7) return "Teléfono inválido";
    if (!data.mensaje || data.mensaje.length < 5) return "Mensaje muy corto";
    return null;
}

// TRANSPORTER (GMAIL)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// RUTA FORMULARIO
app.post("/api/contacto", async (req, res) => {
    try {
        const error = validarDatos(req.body);
        if (error) {
            return res.status(400).json({ ok: false, msg: error });
        }

        const { nombre, telefono, email, mensaje } = req.body;

        const mailOptions = {
            from: `"Vicmar Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "Nuevo cliente Vicmar Services",
            html: `
                <h2>Nuevo contacto desde la web</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Email:</strong> ${email || "No proporcionado"}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.json({ ok: true, msg: "Mensaje enviado correctamente" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error en el servidor" });
    }
});

// SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
