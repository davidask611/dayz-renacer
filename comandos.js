// Galería de fondos dinámicos
const imagenesFondo = [
  "img_fondo/elicrash.png",
  "img_fondo/dayz.png",
  "img_fondo/losultimates.png",
];

let indiceActual = 0;

function cambiarFondo() {
  const fondo = document.querySelector('.fondo');
  fondo.style.backgroundImage = `url('${imagenesFondo[indiceActual]}')`;
  indiceActual = (indiceActual + 1) % imagenesFondo.length;
}
setInterval(cambiarFondo, 5000);
window.addEventListener('DOMContentLoaded', cambiarFondo);

// --- PAQUETES DONACIONES ---
const paquetes = [
  {
    nombre: "Paquete 1",
    imagen: "img_paquetes/paquete1.jpg",
    descripcion: "Incluye armas, comida y medicina para comenzar tu aventura.",
  },
  {
    nombre: "Paquete 2",
    imagen: "img_paquetes/paquete2.jpg",
    descripcion: "Kit avanzado con recursos extra y equipamiento especial.",
  },
  // Puedes agregar más paquetes aquí
];

function renderPaquetes() {
  const grid = document.getElementById('paquetes-grid');
  if (!grid) return;
  grid.innerHTML = '';
  paquetes.forEach(paquete => {
    // Cambia el número de WhatsApp por el tuyo real
    const mensaje = encodeURIComponent(`Hola, quiero comprar el ${paquete.nombre}`);
    const enlaceWhatsapp = `https://wa.me/5491112345678?text=${mensaje}`;

    const elem = document.createElement('div');
    elem.className = 'paquete-card';
    elem.innerHTML = `
      <h3>${paquete.nombre}</h3>
      <img src="${paquete.imagen}" alt="${paquete.nombre}" width="200" height="200" style="object-fit:cover; border-radius:10px;">
      <p>${paquete.descripcion}</p>
      <a href="${enlaceWhatsapp}" target="_blank" class="btn-comprar">Comprar</a>
    `;
    grid.appendChild(elem);
  });
}

window.addEventListener('DOMContentLoaded', renderPaquetes);