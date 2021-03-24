// Função do Menu do Mobile
const menuBtn = document.querySelector('.menu-navegacao-mobile-btn');
const menuItems = document.querySelector('.menu-navegacao');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
});

// Menu Topo - Muda Cor da Marca
$(document).scroll(function() {
    $("nav").toggleClass("rolagem", $(document).scrollTop() >= 50);
    $(".informacoes-contato").toggleClass("rolagem", $(document).scrollTop() >= 50);
    $(".logo").toggleClass("rolagem", $(document).scrollTop() >= 50);
    $(".logo-simples").toggleClass("rolagem", $(document).scrollTop() >= 50);
  });
