"use strict";

var _typed = require("../node_modules/typed.js");

var _typed2 = _interopRequireDefault(_typed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 50
};

var typingContainer = document.querySelector('.intro-typer');
var typed = new _typed2.default(typingContainer, options);