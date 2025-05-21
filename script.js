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
music.volume = 0.3;

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
