const menutoogle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menutoogle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
