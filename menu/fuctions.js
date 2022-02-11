// MENU

let menu =document.querySelector("#myTopnav");
menu.classList.add("topnav");


let aIndexHTML = document.createElement ("a");
aIndexHTML.innerText="Inicio";
aIndexHTML.href = "../Main/index.html"
aIndexHTML.classList.add("active");
menu.appendChild(aIndexHTML);

let awhoIAm = document.createElement ("a");
awhoIAm.innerText="Sobre";
awhoIAm.href = "../AboutMe/index.html";
menu.appendChild(awhoIAm);

let aCertifications = document.createElement ("a");
aCertifications .innerText="Certificaciones";
aCertifications.href = "../CertificationsMe/index.html";
menu.appendChild(aCertifications);

let aContact = document.createElement ("a");
aContact.innerText="Contacto";
aContact.href = "../ContactMe/index.html";
menu.appendChild(aContact );


let aButton= document.createElement ("a");
aButton.classList.add("icon");
aButton.href = "javascript:void(0)";
menu.appendChild(aButton );
aButton.style.display = "none";

let iMenu = document.createElement ("i");
aButton.appendChild(iMenu);

iMenu.classList.add("fab","fa-bars","iconOculto");


aButton.onclick=myFunction();

 function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 
 

/*----------------------------------------------------------------------------------------------------------------------*/

//FOOTER

let footer = document.createElement ("footer");
document.querySelector("body").appendChild(footer);


/* let footer =document.querySelector("footer"); */
footer.classList.add("textAlingCenter");

//correo
let pMail = document.createElement ("p");
pMail.innerText="";
document.querySelector("footer").appendChild(pMail);

let iMail = document.createElement ("i");
iMail.innerText="";
pMail.appendChild(iMail);

let containerMail = document.createElement ("p");
containerMail.innerText="caro.0296@hotmail.com";
pMail.appendChild(containerMail);

pMail.classList.add("paragraph2","displayInlineBlock");
iMail.classList.add("far","fa-envelope-open", "icons");
containerMail.classList.add("paddingFooter","icons","far");


// telefono
let pPhone = document.createElement ("p");
document.querySelector("footer").appendChild(pPhone);

let iPhone = document.createElement ("i");
pPhone.appendChild(iPhone);

let containerPhone = document.createElement ("p");
containerPhone.innerText="11 3844-8621";
pPhone.appendChild(containerPhone);


pPhone.classList.add("paragraph2","displayInlineBlock");
iPhone.classList.add("fab","fa-whatsapp","icons");
containerPhone.classList.add("paddingFooter","icons","far");


// REDES:
let pNetworks = document.createElement ("p");
document.querySelector("footer").appendChild(pNetworks);

pNetworks.classList.add("paragraph2","displayInlineBlock");

//linkedin
let aLinkedin = document.createElement ("a");
aLinkedin.href = "https://www.linkedin.com/in/carolinafernandezpreziosi/";
aLinkedin.target = " _blank"
pNetworks.appendChild(aLinkedin);

let iLinkedin = document.createElement ("i");
iLinkedin.innerText="";
aLinkedin.appendChild(iLinkedin);

aLinkedin.classList.add("icons");
iLinkedin.classList.add("fab","fa-linkedin-in","icons");

//github
let aGit = document.createElement ("a");
aGit.innerText=" ";
aGit.href = "https://github.com/carolinapreziosi";
aGit.target = " _blank"
pNetworks.appendChild(aGit);

let iGit = document.createElement ("i");
iGit.innerText="";
aGit.appendChild(iGit);

aGit.classList.add("icons");
iGit.classList.add("fab","fa-github","icons");

// CV
let divCV = document.createElement ("div");
divCV.innerText=" ";
document.querySelector("footer").appendChild(divCV);

let pCv = document.createElement ("p");
pCv.innerText="";
divCV.appendChild(pCv);

let aCv = document.createElement ("a");
aCv.href ="../menu/CarolinaF.Preziosi-CV.pdf";
aCv.target = " _blank"
pCv.appendChild(aCv);

let containerCV = document.createElement ("p");
containerCV.innerText="CV";
pCv.appendChild(containerCV);

let iCv = document.createElement ("i");
iCv.innerText="";
aCv.appendChild(iCv);

divCV.classList.add("displayInlineBlocK","columns","download","paragraph2","icons");
pCv.classList.add("paragraph2");
aCv.classList.add("button","buttonStyle");
iCv.classList.add("fa","fa-download","icons");
containerCV.classList.add("paddingFooter","icons","far");