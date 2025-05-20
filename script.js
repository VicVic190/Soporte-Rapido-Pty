// script.js
function enviarWhatsApp() {
  const nombre = document.getElementById('nombre').value;
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value;
  const texto = `Hola, soy ${nombre}. Estoy interesado en el servicio de "${servicio}".\n\nMensaje: ${mensaje}`;
  const url = `https://wa.me/50767332882?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}
