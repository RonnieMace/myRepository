var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("colorBtn");

function setGradient() {
	body.style.background = 
 	"linear-gradient(to right, " 
 	+ color1.value 
 	+ ", " 
 	+ color2.value 
 	+ ", " 
 	+ color1.value 
 	+ ")";

	css.textContent = body.style.background + ";";
}
 
function randomColors() {
	// body...
	var colorFrom = "#";
	var colorTo	  = "#";
	for (k = 0; k < 3; k++) {
	    colorFrom += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
	}
	for (k = 0; k < 3; k++) {
	    colorTo += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
	}
	color1.value = colorFrom;
	color2.value = colorTo;
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomColors);