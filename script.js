
















const hamburgerIcon = document.querySelector('#hamburger-icon');
const xIcon = document.querySelector('#x-icon');

const nav = document.querySelector('nav');






hamburgerIcon.addEventListener('click', function() {

   nav.style.display = 'block';
   hamburgerIcon.style.display = 'none';
   xIcon.style.display = 'block';


})


xIcon.addEventListener('click', function() {

     nav.style.display = 'none';

     hamburgerIcon.style.display = 'block';
     xIcon.style.display = 'none';
})


