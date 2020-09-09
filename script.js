var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombBtn = document.querySelector(".random");

function setGradient() {
	body.style.background = "Linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ color2.value
	+")";

	css.textContent = body.style.background + ";";
}

function newColor() {
	return "#" + Math.random().toString(16).substring(2, 8);
}

function randomcolor() {
	color1.value = newColor();
	color2.value = newColor();
	setGradient();
}

body.onload = function() {
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randombBtn.addEventListener("click", randomcolor);
