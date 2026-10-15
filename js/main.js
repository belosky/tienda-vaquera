// El Ranchero Store - main.js
document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const abierto = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", abierto);
    toggle.textContent = abierto ? "✕" : "☰";
  });

  menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });

  // Año automático en el pie de página
  document.getElementById("year").textContent = new Date().getFullYear();

  // Aviso (toast)
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);

  let temporizador;
  function mostrarAviso(texto) {
    toast.textContent = texto;
    toast.classList.add("show");
    clearTimeout(temporizador);
    temporizador = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  // Botones "Consultar": abren WhatsApp con el producto elegido
  const NUMERO_WHATSAPP = "50200000000"; // Cambiar por tu número (código de país + número)

  document.querySelectorAll(".js-consultar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const producto = boton.closest(".card").dataset.producto;
      const mensaje = encodeURIComponent(`Hola, me interesa: ${producto}. ¿Está disponible?`);
      mostrarAviso(`🤠 Abriendo WhatsApp para consultar: ${producto}`);
      window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`, "_blank", "noopener");
    });
  });
});
