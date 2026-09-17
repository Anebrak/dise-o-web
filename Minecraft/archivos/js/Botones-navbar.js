const btnJuegos = document.getElementById('btn-ul-1');
const btnTienda = document.getElementById('btn-ul-2');
const btnExploracion = document.getElementById('btn-ul-3'); 
const btnAprender = document.getElementById('btn-ul-4');


const navAprender = document.getElementById('navbars1');
const navJuegos = document.getElementById('navbars2');
const navTienda = document.getElementById('navbars3'); 
const navExploracion = document.getElementById('navbars4'); 


const todosLosBotones = [btnJuegos, btnAprender, btnTienda, btnExploracion];
const todosLosNavs = [navJuegos, navAprender, navTienda, navExploracion];

function actualizarIcono(boton, abierto) {
  const icono = boton.querySelector('i');
  if (icono) {
    icono.classList.toggle('fa-angle-up', abierto);
    icono.classList.toggle('fa-angle-down', !abierto);
  }
  boton.classList.toggle('activo', abierto);
}

function alternarNav(btnClicado, navClicado) {
  const estaVisible = navClicado.classList.contains('visible');

  // Cerrar todos los menús y reiniciar todos los botones
  todosLosNavs.forEach(nav => nav.classList.remove('visible'));
  todosLosBotones.forEach(btn => actualizarIcono(btn, false));

  // Si no estaba abierto, abrirlo
  if (!estaVisible) {
    navClicado.classList.add('visible');
    actualizarIcono(btnClicado, true);
  }

  // Desactivar scroll si hay algún menú visible
  const hayVisibles = todosLosNavs.some(nav => nav.classList.contains('visible'));
  document.body.classList.toggle('no-scroll', hayVisibles);
}

// Event Listeners
btnJuegos.addEventListener('click', (e) => {
  e.stopPropagation();
  alternarNav(btnJuegos, navJuegos);
});

btnAprender.addEventListener('click', (e) => {
  e.stopPropagation();
  alternarNav(btnAprender, navAprender);
});

btnTienda.addEventListener('click', (e) => { 
  e.stopPropagation();
  alternarNav(btnTienda, navTienda);
});

btnExploracion.addEventListener('click', (e) => { 
  e.stopPropagation();
  alternarNav(btnExploracion, navExploracion);
});

