export const PI = Math.PI;

export let usuario = "JHH";
let password = "qwerty";
//export default password;

const hello = () => console.log("Hola");

export default function saludar() {
  console.log("Hola Modulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola clases +ES6 - clase");
  }
}
