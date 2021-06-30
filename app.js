import { colors } from './colors.js';

var button = document.querySelector("#btn");
var body = document.querySelector("body");
var paragraph = document.querySelector("p");
var span = document.querySelector('.spinner');

button.addEventListener("click", function() {
    var index = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[index];
    paragraph.textContent = colors[index];
    span.style.color = colors[index];
    button.style.backgroundColor = colors[index];
});