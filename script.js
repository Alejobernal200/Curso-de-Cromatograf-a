document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Validación simple
        if (nombre && email) {
            mensaje.textContent = `Gracias por registrarte, ${nombre}. Te hemos enviado un correo a ${email}.`;
            formulario.reset(); // Reiniciar el formulario
        } else {
            mensaje.textContent = 'Por favor, completa todos los campos.';
        }
    });
});