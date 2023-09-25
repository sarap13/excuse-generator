/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Se crea un btn en html que cuando se le de click el id the excuse de html cambie por otro al llamar a a la función generateExcuse().

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

// Crear una función flecha para generar excusa
// 1º crear variables con arrays con las palabras que queramos que aparezcan random.

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Crear una variable en este caso indice donde con math random se crea un num aleatorio (min 0 y el maximo sera la longitud del array) Será con números enteros (Math.floor)
  // Esta se hace para que se seleccione aleatoriamente una palabra del indice cada vez que presionemos el boton refresh cambie de palabra.

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );

  // La función nos devuelve una palabra random de cada indice (Arrays arriba)
};
