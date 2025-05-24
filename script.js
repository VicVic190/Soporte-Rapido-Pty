// Función para enviar WhatsApp
function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value.trim();
  const servicio = document.getElementById("servicio").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !servicio) {
    alert("Por favor completa tu nombre y el servicio requerido.");
    return;
  }

  const texto = `Hola, soy ${nombre}. Necesito el servicio de: ${servicio}. Mensaje adicional: ${mensaje}`;
  const url = `https://wa.me/50767332882?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}

// Control de música de fondo
const music = document.getElementById('background-music');
const toggleBtn = document.getElementById('audio-toggle');

// Ajustar volumen inicial
music.volume = 1;

// Inicia pausado esperando que el usuario dé clic para reproducir
music.pause();
music.currentTime = 0;

let isPlaying = false;

toggleBtn.textContent = '🔈';
toggleBtn.classList.add('muted');

toggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = '🔈';
    toggleBtn.classList.add('muted');
  } else {
    music.play().catch(err => {
      // Manejar errores, por ejemplo si autoplay es bloqueado
      console.log("Error al reproducir:", err);
    });
    toggleBtn.textContent = '🔊';
    toggleBtn.classList.remove('muted');
  }
  isPlaying = !isPlaying;
});


// JavaScript para interactividad del formulario de servicios
function mostrarResumen() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let resumen = '<h3>Resumen de Servicios Seleccionados:</h3><ul>';
  let total = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) {
      const nombre = cb.dataset.nombre;
      const precio = parseFloat(cb.dataset.precio);
      resumen += `<li>${nombre} – $${precio}</li>`;
      total += precio;
    }
  });

  resumen += `</ul><strong>Total: $${total}</strong>`;
  document.getElementById('resumen').innerHTML = resumen;
  document.getElementById('pago').style.display = 'block';
}


function mostrarMetodoPago(valor) {
  const info = document.getElementById('infoPago');
  if (valor === 'efectivo') {
    info.innerHTML = '<p>✅ Pasaremos a retirar el efectivo directamente a su casa.</p>';
  } else if (valor === 'yapi') {
    info.innerHTML = '<p>✅ Número YAPI: <strong>67332882</strong></p>';
  } else if (valor === 'tarjeta') {
    info.innerHTML = '<p>✅ Introduzca sus datos de tarjeta de manera segura (implementación futura con pasarela de pago segura).</p>';
  } else {
    info.innerHTML = '';
  }
}

function mostrarContacto() {
  document.getElementById('servicios').style.display = 'none';
  document.getElementById('contacto').style.display = 'block';
}

function cerrarContacto() {
  document.getElementById('contacto').style.display = 'none';
  document.getElementById('servicios').style.display = 'block';
}


