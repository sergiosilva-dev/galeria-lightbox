// Obtener todos los elementos <img> dentro de la galería
const imagenes = document.querySelectorAll(".galeria img");

// Obtener elementos del Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const btnClose = document.getElementById("btnClose");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let indiceActual = 0; // índice de imagen activa

// Abrir lightbox al hacer clic en imagen
imagenes.forEach((img, index) => {
  img.addEventListener("click", () => {
    mostrarLightbox(index);
  });
});

function mostrarLightbox(index) {
  indiceActual = index;
  lightbox.classList.add("show");
  lightboxImg.src = imagenes[index].src;
  lightboxImg.alt = imagenes[index].alt;
  lightbox.setAttribute("aria-hidden", "false");
}

// Navegar a imagen anterior
function imagenAnterior() {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarLightbox(indiceActual);
}

// Navegar a imagen siguiente
function imagenSiguiente() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarLightbox(indiceActual);
}

// Eventos
btnClose.addEventListener("click", cerrarLightbox);
btnPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  imagenAnterior();
});
btnNext.addEventListener("click", (e) => {
  e.stopPropagation();
  imagenSiguiente();
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) cerrarLightbox();
});

// Accesibilidad con teclado
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("show")) return;

  switch (e.key) {
    case "Escape":
      cerrarLightbox();
      break;
    case "ArrowLeft":
      imagenAnterior();
      break;
    case "ArrowRight":
      imagenSiguiente();
      break;
  }
});

// Evitar scroll del fondo al abrir Lightbox
function mostrarLightbox(index) {
  indiceActual = index;
  lightbox.classList.add("show");
  lightboxImg.src = imagenes[index].src;
  lightboxImg.alt = imagenes[index].alt;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // bloquea scroll fondo
}

function cerrarLightbox() {
  lightbox.classList.remove("show");
  lightboxImg.src = "";
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // restaura scroll
}