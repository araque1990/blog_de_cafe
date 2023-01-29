// querySelector
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Utilizando querySelector';

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Linea 7 scripts.js';
enlaces[0].classList.add('nueva-clase');


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');



console.log(nuevoEnlace)