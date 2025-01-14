console.log("El archivo script.js se está ejecutando correctamente.");

// Seleccionar el botón del menú hamburguesa y el contenedor del menú
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

// Escuchar el evento "click" en el botón hamburguesa
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open"); // Alterna la clase "open" en el menú
});


// Variables para el modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

// Agregar evento a las imágenes de la galería
const galleryItems = document.querySelectorAll(".galeria-item img");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "flex"; // Muestra el modal
        modalImg.src = item.src; // Cambia la imagen del modal
    });
});

// Cerrar el modal al hacer clic en el botón "Cerrar"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});






// Seleccionar el formulario
const form = document.getElementById("contact-form");

// Agregar evento de "submit"
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Validar los campos
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("message").value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    if (email === "" || !validarEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    if (mensaje === "" || mensaje.length < 10) {
        alert("Por favor, escribe un mensaje de al menos 10 caracteres.");
        return;
    }

    // Si todo es válido, puedes enviar el formulario
    alert("Formulario enviado con éxito.");
    form.reset(); // Limpia el formulario después de enviarlo
});

// Función para validar el formato del correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto

    // Depuración: verifica los valores de los campos
    console.log("Nombre:", document.getElementById("nombre").value);
    console.log("Correo:", document.getElementById("email").value);
    console.log("Mensaje:", document.getElementById("mensaje").value);

    // Reemplaza con tu Service ID y Template ID de EmailJS
    const serviceID = "service_vgj6tpe";
    const templateID = "template_oiy7ha4";

    // Enviar el formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert("¡Mensaje enviado con éxito!");
            this.reset(); // Limpia el formulario
        }, (err) => {
            alert("Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
            console.error("Error: ", err);
        });
});
