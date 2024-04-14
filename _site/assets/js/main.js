/* Gradientizinho no fundo
=============================================== */

(function () {
  const r = document.querySelector(':root');
  let tom_a = Math.random() * 255;
  let tom_b = (tom_a + 100) % 255;
  r.style.setProperty('--gradienta-A', `hsl(${tom_a}, 83%, 60%)`);
  r.style.setProperty('--gradienta-B', `hsl(${tom_b}, 40%, 80%)`);
})();

/* Menu
=============================================== */

(function () {
  const botao_menu = document.querySelector('.botao-menu');
  const indice = document.querySelector('.indice');
  botao_menu.addEventListener('click', function() {
    indice.classList.toggle( 'aberto');
    if( indice.classList.contains('aberto')) {
      botao_menu.innerText = "Fechar";
    } else {
      botao_menu.innerText = "Menu";
    }
  })
})();

