const body = document.getElementById('body');
const btnBar = document.getElementById('icon-bar');
const navBar = document.querySelector('.nav-bar');

btnBar.addEventListener('click', () => {
  
  body.classList.toggle('hidden');
  navBar.classList.toggle('show');

});