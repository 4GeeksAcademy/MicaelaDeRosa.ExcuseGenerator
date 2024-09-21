/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
console.log("Hello Rigo from the console!");
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let excusa = excuse(who, action, what, when);
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excusa;
};

function excuse(who, action, what, when) {
  let subject = Math.floor(Math.random() * who.length);
  let verb = Math.floor(Math.random() * action.length);
  let object = Math.floor(Math.random() * what.length);
  let place = Math.floor(Math.random() * when.length);

  return (
    who[subject] + " " + action[verb] + " " + what[object] + " " + when[place]
  );
}
