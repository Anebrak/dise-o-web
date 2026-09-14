const boton = document.getElementById('btn-ul-4');
const seccion = document.getElementById('navbars');

boton.addEventListener('click', () => {
  seccion.classList.toggle('visible');
  document.body.classList.toggle('no-scroll');
});

