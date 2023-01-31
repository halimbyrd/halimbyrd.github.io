const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');
const body = document.querySelector('body');
const name = document.querySelector('.name');
const skillsHead = document.querySelector('.skills-head');
const projectTitles = document.querySelectorAll('h3');
const projectCards = document.querySelectorAll('.project-card');
const links = document.querySelectorAll('a');
const projectDetails = document.querySelectorAll('.project-details')
const contactHeads = document.querySelectorAll('.contact_head');
const contactSection = document.querySelector('.contact');
const aboutMe = document.querySelector('.about-me');





moon.addEventListener('click', function() {

     moon.classList.add('hidden');
     sun.classList.remove('hidden');
   
     aboutMe.style.color = '#FFFFFF';

    body.style.backgroundColor = 'rgb(37, 29, 23)';
    name.style.color = 'white';
    skillsHead.style.color = 'white';

//#D7D1BF'
    projectCards.forEach(function(projectcard) {
        projectcard.style.backgroundColor = 'rgb(37, 29, 23) '
        projectcard.style.boxShadow = 'none'
    });


    projectTitles.forEach(function(projecttitle) {
        projecttitle.style.color = '#FFFDFD';
    });


   links.forEach(function(link) {
    link.style.backgroundColor = 'black';
    link.style.color = '#C36656';

    link.addEventListener('mouseover', function() {
        link.style.color = 'white';
        link.style.transition = 'color 1s ease';
    });


    link.addEventListener('mouseleave', function() {
        link.style.color = '#C36656';

    });


   });


   projectDetails.forEach(function(details) {
     details.style.color = 'white';
   });



   contactHeads.forEach(function(contacthead) {
      contacthead.style.color = '#FDBA74';
   });



   contactSection.style.backgroundColor = '#1B130C';


});






sun.addEventListener('click', function() {
   
    moon.classList.remove('hidden');
    sun.classList.add('hidden');
    
    aboutMe.style.color = "";
    aboutMe.style.color = 'black';

    body.style.backgroundColor = '#F7F9FC';
   name.style.color = '#01ADB7';




   skillsHead.style.color = '#01ADB7';



   projectCards.forEach(function(projectcard) {
       projectcard.style.backgroundColor = 'white'
       projectcard.style.boxShadow = '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
   });


   projectTitles.forEach(function(projecttitle) {
       projecttitle.style.color = '#778a9c';
   });


   
  links.forEach(function(link) {
   link.style.backgroundColor = 'rgb(214, 210, 210)';
   link.style.color = '#383E47';


   link.addEventListener('mouseover', function() {
    link.style.color = '#383E47';
     link.style.transition = 'none';
 });


 link.addEventListener('mouseleave', function() {
     link.style.color = '#383E47';

 });
 

});

/*
   link.addEventListener('mouseover', function() {
      link.style.color = '#383E47';
       link.style.transition = 'none';
   });


   link.addEventListener('mouseleave', function() {
       link.style.color = '#383E47';

   });

//
 
*/

  projectDetails.forEach(function(details) {
   details.style.color = '#292C35';
  });



  contactHeads.forEach(function(contacthead) {
     contacthead.style.color = 'rgb(173, 173, 173)';
  });



  contactSection.style.backgroundColor = 'rgb(216, 215, 215)'









})







