// 1. Seleccionamos todos los contenedores nav
const navs = document.querySelectorAll('.navbars');

navs.forEach(nav => {
  // 2. Buscamos los botones pertenecientes ÚNICAMENTE a este nav
  const botones = nav.querySelectorAll('.btn-bar');

  // 3. Activamos el primer botón de ESTE nav
  if (botones.length > 0) {
    botones[0].classList.add('activo');
  }

  // 4. Agregamos el evento a los botones de este nav
  botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const botonActual = e.currentTarget;

      // Apagamos los botones de ESTE nav únicamente
      botones.forEach(b => b.classList.remove('activo'));

      // Encendemos el botón clickeado
      botonActual.classList.add('activo');
    });
  });
});