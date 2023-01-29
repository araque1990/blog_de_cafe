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

// //Eventos
// console.log(1);

// window.addEventListener('load', imprimir()) // load espera a que el JS y los archivos que dependen del HTML estén listos;

// window.onload = function() {
//   console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // Solo espera a que se cargue el HTML, pero no espera CSS o imagenes. 
//   console.log(4);
// })

// console.log(5);

// function imprimir() {
//   console.log(2);
// }


// Seleccionar elemento y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e) { // el parametro de la funcion es el evento que pusimos en el listener como primer parametro, en algunos ejemplos lo vemos como `e` y si lo muestro por consola, me muestra todos los datos asociados a ese evento. 
//   //console.log(evento);
//   e.preventDefault();// Especialmente util para validar formularios
//   console.log('Enviando formulario...');
// });

// Eventos de los input y los textarea

const datos = {
  nombre: '',
  email: '',
  mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

function leerInputs(e) {
  datos[e.target.id] = e.target.value;
  console.log(datos);
}

nombre.addEventListener('input', leerInputs);
email.addEventListener('input', leerInputs);
mensaje.addEventListener('input', leerInputs);

// El Evento de Submit
formulario.addEventListener('submit', function(e) {
  e.preventDefault();


  // Validar el formulario

  const { nombre, email, mensaje } =  datos;
  if(nombre === '' || email === '' || mensaje === '') { // La validacion principal la hemos hecho en el HTML con el required, este es solo un ejemplo para ver como se hace con JS
    mostrarAlerta('* Todos los campos son obligatorios', true);
    return;
  } else {
    mostrarAlerta('* Su mensaje ha sido enviado correctamente');
  }
 
  // Enviar el formulario

  console.log('Enviando formulario...');
});

// Mostrar alerta
function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;

  if(error) {
    alerta.classList('error');
  } else{
    alerta.classList('enviado');
  }

  formulario.appendChild(alerta);

  // Desaparezca después de 2 segundos
  setTimeout(() => {
    alerta.remove();
  }, 2000);
}