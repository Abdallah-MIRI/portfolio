const body = document.getElementById('body');
const btnBar = document.getElementById('icon-bar');
const menuBar = document.querySelector('.menu-bar');

btnBar.addEventListener('click', () => {
  
  body.classList.toggle('hidden')
  menuBar.classList.toggle('show')

})