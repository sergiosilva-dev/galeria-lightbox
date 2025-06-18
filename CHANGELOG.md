# 📘 Changelog

Todos los cambios notables de este proyecto se documentan en este archivo, siguiendo buenas prácticas para el control de versiones.

---

## [2025-06-18] Sergio Silva

### ✨ Agregado
- `favicon.ico` e íconos adaptados para múltiples dispositivos (manifest y Apple touch).
- `robots.txt`, `sitemap.xml` y verificación Google para posicionamiento.
- AOS.js (`Animate on Scroll`) para animaciones en secciones clave: banner, galería, contacto.
- Datos estructurados con JSON-LD (`WebSite`, `CreativeWork`) en el `<head>`.
- Etiquetas Open Graph y Twitter Card para compartir en redes sociales.
- Meta etiquetas clave: `description`, `author`, `keywords`, `robots`, `theme-color`, `creator`, `language`.
- Script `defer` para mejorar carga, sugerencias de lazy loading, compresión y optimización de imágenes.
- `CHANGELOG.md` y estandarización de commits tipo `Nombre | Fecha | Acción`.

### 🎨 Modificado
- Alineación de título "Galería" y ajustes de espaciado para bloque.
- Altura uniforme de imágenes en galería (`object-fit: cover`, `aspect-ratio`, `grid layout`).
- Mejora en el bloque `Contacto` (estructura clara, accesibilidad).
- HTML semántico mejorado: `section[aria-label]`, `ul role="list"`, `header`, `nav`, `main`, `footer`.
- Footer visual: fondo oscuro, íconos sociales, ícono de correo, estilo responsive.
- Preconexión y carga optimizada de fuentes desde Google Fonts.

### 🐞 Corregido
- Eliminado scroll horizontal inesperado en móviles.
- Ajustes en el banner para redondear imagen e integrar mejor con el diseño.

---

## [2025-06-17] Sergio Silva

### 🧱 Estructura Base
- Estructura inicial del proyecto: carpetas base, index.html, CSS y JS.
- Integración inicial del Lightbox con navegación y cierre.
- Maquetación semántica con secciones: hero, galería, footer.
- Estilos base: reset, layout responsivo, tipografía `Poppins`.
- Mejora de accesibilidad: etiquetas `alt`, navegación con teclado, ARIA roles.
- Diseño de header minimalista tipo landing moderna con menú toggle.