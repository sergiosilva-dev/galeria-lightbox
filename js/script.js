// Obtener todos los elementos <img> dentro de la galería
const imagenes = document.querySelectorAll(".galeria img");

// Obtener elementos del Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const btnClose = document.getElementById("btnClose");

// Recorremos todas las imágenes y asignamos evento de clic
imagenes.forEach((img) => {
  img.addEventListener("click", () => {
    // Mostrar el lightbox
    lightbox.classList.add("show");

    // Reemplazar src y alt con el de la imagen clickeada
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;

    // Quitar aria-hidden por accesibilidad
    lightbox.setAttribute("aria-hidden", "false");
  });
});

// Función para cerrar el lightbox
function cerrarLightbox() {
  lightbox.classList.remove("show");
  lightboxImg.src = "";
  lightbox.setAttribute("aria-hidden", "true");
}

// Evento para botón de cerrar
btnClose.addEventListener("click", cerrarLightbox);

// También cerrar si se hace clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    cerrarLightbox();
  }
});
