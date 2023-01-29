// querySelector
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Utilizando querySelector';

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Linea 7 scripts.js';
enlaces[0].classList.add('nueva-clase');


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace)

//Eventos
console.log(1);

window.addEventListener('load', imprimir()) // load espera a que el JS y los archivos que dependen del HTML estén listos;

window.onload = function() {
  console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera a que se cargue el HTML, pero no espera CSS o imagenes. 
  console.log(4);
})

console.log(5);

function imprimir() {
  console.log(2);
}


// Seleccionar elemento y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');