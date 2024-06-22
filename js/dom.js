/* 
    console.log(window);
    console.log(document);

    let texto = " "
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

    hablar(texto)
*/

/* 
console.log("*************Elementos del Documento*************");
console.log(window);
conso//Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));
le.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log(document.scripts);
setTimeout(() => {
  console.log(docußment.getSelection().toString());
}, 3000);
document.write("<h2>Hola Mundo desde el DOM  </h2>"); 
*/

/* 
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
//console.log(document.getElementsById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
 */

/* 
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
console.log(document.documentElement.setAttribute("lang", "es-MX"));
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("target", "https://youtube.com");

console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

 */

/* 
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

// Variables CSS - Custom Properties CSS

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor)
 */

/* 
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45")
console.log($card.className);
console.log($card.classList);

$card.classList.remove("rotate-45")
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-135")
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")
$card.classList.toggle("opacity-80", "sepia")
 */

/* 
const $whatIsDOM = document.getElementById("que-es");

let text = `<p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;
//$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
 */
/* 
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.parentNode);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild)
  ;
console.log($cards.previousSibling);
console.log($cards.nextElementSibling);
 */
/* 
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("fig"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals ");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People">
  <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año<h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Oceania", "Europa"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo<h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;

  $fragment.appendChild($li)
});


document.write("<h3>Meses del Año<h3>");
$ul3.appendChild($fragment)
document.body.appendChild($ul3)
 */

/* 
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2])
//$cards.insertBefore($newCard, $cards.firstChild)
//$cards.removeChild($cards.lastElementChild)\

document.appendChild($cloneCards);
 */

/* 
.inserAdjacent...
  .inserAdjacentElement(position, el)
  .inserAdjacentHTML(position, html)
  .inserAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)

*/

/* 
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
//$cards.insertAdjacentHTML("afterbegin", $newCard);

//$cards.prepend($newCard)
//$cards.before($newCard)
//$cards.append($newCard)
//$cards.after($newCard)
 */
/* 
function holaMundo() {
  alert("Hola Mundo");
  console.log(PointerEvent);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
  alert("Hola mundo manejador de eventos semantico");
  console.log(e);
};

$eventoMultiple.addEventListener("click", holaMundo);

$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo con manejador de eventos multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(Event);
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("javier");
});

const removerDobleClick = (e) => {
  alert(`Remopviendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
 */
/* 
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
  //e.stopPropagation();
}

document.addEventListener("click", (e) => {
  console.log("click en ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola pagina jonmircha");
    e.preventDefault();
  }
});
 */
/* $divsEventos.forEach((div) => {
  $div.addEventListener('click', flujoEventos)
}) */

/* 
console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  div.addEventListener("click", flujoEventos, false);

  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);

  
  div.addEventListener("click", flujoEventos, {
    //capture:false
    capture: true,
    once: true,
  }); 
  
});


$linkEventos.addEventListener("click", (e) => {
  alert("hola, pagina jonmircha");
  e.preventDefault();
  e.stopPropagation();
});
 */

/* 


*/
/* 
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("*****Evento Resize******");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("*****Evento Scroll******");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.clear();
  console.log("*****Evento Load******");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("*****Evento DOMContenyLoaded******");
  console.log(e);
});
 */

//window.alert("alerta");
//window.confirm("confirmacion");
//window.prompt("aviso");

/* 




*/
const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e) => {
  //window.close(ventana);
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
  window.print()
});
