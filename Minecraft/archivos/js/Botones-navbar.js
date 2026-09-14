const btnJuegos = document.getElementById('btn-ul-1');
const btnAprender = document.getElementById('btn-ul-4');

const navJuegos = document.getElementById('navbars2');
const navAprender = document.getElementById('navbars');


btnJuegos.addEventListener('click', (e) => {
  e.stopPropagation();
navAprender.classList.remove('visible');
  navJuegos.classList.toggle('visible');
document.body.classList.toggle('no-scroll', navJuegos.classList.contains('visible'));
});

btnAprender.addEventListener('click', (e) => {
e.stopPropagation();
navJuegos.classList.remove('visible');
navAprender.classList.toggle('visible');
document.body.classList.toggle('no-scroll', navAprender.classList.contains('visible'));
});