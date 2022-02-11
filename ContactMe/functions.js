// creo H1 animado
let titleContact ='Contactame:';
let h1 = document.createElement("h1")
h1.innerText = ""
document.querySelector('.containertitleContact').appendChild(h1)
let counter = 0
let intervalo = setInterval(()=>{
    if(counter <titleContact.length){
        h1.innerText+=titleContact[counter] 
        counter++  
    }else{
        h1.innerText = ""
        counter = 0
    }
},200)


//agrego la clase padding-top al titulo
document.querySelector('.containertitleContact').classList.add('padding-top');

//agrego la clase botonFormulario  al boton enviar del formulario
document.querySelector('.button').classList.add('buttonForm');

//FORMULARIO:

let formContact=document.forms[0];
formContact.onsubmit = validate;

function validate(){

let mistakes = []

let validateName = document.getElementById("nombre").value;
if( validateName == null || validateName.length == /^[A-z]+$/.test(validateName)) {
  mistakes.push('Ingrese un nombre valido ( solo letras )');
}

if(nombre.value.trim().length < 4) {
  mistakes.push ('Ingrese un nombre con minimo 4 caracteres');
}

if(nombre.value.trim().length > 25) {
  mistakes.push ('Ingrese un nombre con maximo 25 caracteres');
}

let ValidateEmail = document.getElementById("email").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(ValidateEmail)) ) {
  mistakes.push('ingrese un correo valido que contenga ".com.ar" ');
}

let validateMessage = document.getElementById("mensaje").value;
if( validateMessage == null ||validateMessage.length == 0 || /^\s+$/.test(validateMessage) ) {
  mistakes.push('ingrese comentarios , gracias');  
}

let validateReason = document.getElementById("motivo").selectedIndex;
if( validateReason == null || validateReason == 0 ) {
  mistakes.push('ingrese el motivo de contacto, gracias');
}

//pregunta
if(mistakes.length == 0) {
  return true; // se envia el form
}
else{
  let list = document.getElementById("mistakes");
  let content = "";
  for(let i=0; i<mistakes.length; i++){
    content = content + '<li>' + mistakes[i] + '</li>';
  }
  list.innerHTML = content;
  return false; // no se envia el form
}

}