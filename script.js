function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = `Hola, soy ${nombre}. Necesito el servicio de: ${servicio}. Mensaje adicional: ${mensaje}`;
  const url = `https://wa.me/50767332882?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}
const music = document.getElementById('background-music');
const toggleBtn = document.getElementById('audio-toggle');

music.volume = 1.0; // volumen bajo

// Intentar autoplay (puede bloquearse)
music.play().then(() => {
  console.log('Música en reproducción automática');
  toggleBtn.textContent = '🔊';
}).catch(err => {
  console.log('No se pudo reproducir automáticamente:', err);
  music.muted = true; // enmudece si no puede reproducir
  toggleBtn.textContent = '🔈';
});

let isPlaying = !music.paused && !music.muted;

toggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = '🔈';
    toggleBtn.classList.add('muted');
  } else {
    music.play();
    toggleBtn.textContent = '🔊';
    toggleBtn.classList.remove('muted');
  }
  isPlaying = !isPlaying;
});
