function mostrarDonacion() {
    const div = document.getElementById('donacion');
    div.classList.toggle('oculto');
}

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

// Cambiar fondo cada 5 segundos
setInterval(cambiarFondo, 5000);

// Mostrar el primero al cargar
window.addEventListener('DOMContentLoaded', cambiarFondo);
