import Typed from "../node_modules/typed.js"

var options = {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 50
}

var typingContainer = document.querySelector('.intro-typer');
let typed = new Typed(typingContainer, options);