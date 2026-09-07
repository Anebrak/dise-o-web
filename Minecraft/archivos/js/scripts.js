
  const imgFondo = document.querySelector('.imagenFondo');
  

  const textos = document.querySelectorAll('.textosFondo .texto-fondo');

  const btn1 = document.querySelector('.btn-fondo1');
  const btn2 = document.querySelector('.btn-fondo2');
  const btn3 = document.querySelector('.btn-fondo3');


  function cambiarTextoActivo(posicion) {
    textos.forEach(texto => texto.classList.remove('activo'));
    if (textos[posicion]) {
      textos[posicion].classList.add('activo');
    }
  }


 
    btn1.addEventListener('click', () => {
      imgFondo.src = 'archivos/img/fondo1.webp';
      cambiarTextoActivo(0);
    });
  
 
 
    btn2.addEventListener('click', () => {
      imgFondo.src = 'archivos/img/fondo2.jpg';
      cambiarTextoActivo(1);
    });
  



    btn3.addEventListener('click', () => {
      imgFondo.src = 'archivos/img/fondo3.webp';
      cambiarTextoActivo(2);
    });

