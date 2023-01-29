const moon = document.querySelector('#moon');
const body = document.querySelector('body');
const name = document.querySelector('.name');
const aboutMe = document.querySelector('.about-me');
const skillsHead = document.querySelector('.skills-head');
const projectTitles = document.querySelectorAll('h3');
const projectCards = document.querySelectorAll('.project-card');
const links = document.querySelectorAll('a');
const projectDetais = document.querySelectorAll('p')










moon.addEventListener('click', function() {

     moon.classList.add('hidden');
     
    body.style.backgroundColor = 'rgb(37, 29, 23)';
    name.style.color = 'white';
    aboutMe.style.color = '#D7D1BF';
    skillsHead.style.color = 'white';


    projectCards.forEach(function(projectcard) {
        projectcard.style.backgroundColor = 'rgb(37, 29, 23) '
        projectcard.style.boxShadow = 'none'
    })


    projectTitles.forEach(function(projecttitle) {
        projecttitle.style.color = '#FFFDFD';
    })


   links.forEach(function(link) {
    link.style.backgroundColor = 'black';
    link.style.color = '#C36656';
   })


   projectDetais.forEach(function(details) {
    details.style.color = 'white';
   });

})






