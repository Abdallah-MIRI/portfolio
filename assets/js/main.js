const body = document.getElementById('body');
const btnBar = document.getElementById('icon-bar');
const navBar = document.querySelector('.nav-bar');

btnBar.addEventListener('click', () => {
  
  classList(body, 'hidden');
  classList(navBar, 'show');
  classList(btnBar, 'btn-motion');

});


function classList(element, valueElem) {
  element.classList.toggle(valueElem);
};