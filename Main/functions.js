
//INDEX
const containerBody = document.querySelector('.containerBody');

let containerNav=document.createElement('div');
containerBody.appendChild(containerNav);

containerNav.classList.add("topnav");
containerNav.setAttribute('id','myTopnav');


let containerSection=document.createElement('section');
containerBody.appendChild(containerSection);
containerSection.classList.add("containerGeneral");

// creo titulos

let div1 = document.createElement('div');
containerGeneral1 = document.querySelector('.containerGeneral');
containerGeneral1.appendChild(div1);
div1.classList.add("paragraph","containerIndex");

let h1 = document.createElement('h1');
h1.innerText = 'Hola, soy Carolina' ;
const container = document.querySelector('.containerIndex');
container.appendChild(h1);

// creo H2 animado
let texto ='¡Bienvenidos!' ;
let h2 = document.createElement("h2")
h2.innerText = ""
document.querySelector('.containerIndex').appendChild(h2)
let counter = 0
let intervalo = setInterval(()=>{
    if(counter < texto.length){
        h2.innerText+=texto[counter] 
        counter++  
    }else{
        h2.innerText = ""
        counter = 0
    }
},250)

// creo parrafos
let div2 = document.createElement('div');
const containerGeneral2 = document.querySelector('.containerGeneral');
containerGeneral2.appendChild(div2);
div2.classList.add("paragraph","container2","container2Index");

let paragraph1 = document.createElement('p');
paragraph1.innerText = 'Información sobre mis estudios y proyectos.' ;
const container3 = document.querySelector('.container2Index');
container3.appendChild(paragraph1);

let paragraph2 = document.createElement('p');
paragraph2.innerText = 'No dudes en contactarme ante cualquier duda.' ;
const container4 = document.querySelector('.container2Index');
container4.appendChild(paragraph2);

let div3 = document.createElement('div');
const containerGeneral3 = document.querySelector('.containerGeneral');
containerGeneral3.appendChild(div3);
div3.classList.add("paragraph","container3","container3Index");

let paragraph3 = document.createElement('p');
paragraph3.innerText = 'Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro...';
const container5 = document.querySelector('.container3Index');
container5.appendChild(paragraph3);

