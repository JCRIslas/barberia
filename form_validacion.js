document.addEventListener('DOMContentLoaded', function() {
// Obtener el formulario
const form = document.getElementById('contact-form');

// Agregar evento de envío
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    // Validar los campos
    const nombre = document.getElementById('nombreapellido').value.trim();
    const email = document.getElementById('correoelectronico').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const contacto = document.querySelector('input[name="contacto"]:checked');
    const horario = document.getElementById('horario').value;
    const novedades = document.querySelector('input[type="checkbox"]').checked;

    // Validación básica
    if (nombre === '' || email === '' || telefono === '' || mensaje === '' || !contacto) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Validar correo electrónico usando expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Validar número de teléfono usando expresión regular
    const telefonoRegex = /^\d+$/;
    if (!telefonoRegex.test(telefono)) {
        alert('Por favor, ingrese solo números en el campo de teléfono.');
        return;
    }


    // Mensaje de éxito
    alert('¡Formulario enviado correctamente!');
    form.reset(); // Limpiar el formulario después del envío
});
});