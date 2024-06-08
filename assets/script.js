
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImage = document.querySelector(".banner-img");

const arrowR = document.querySelector(".arrow_right"); 

const arrowL = document.querySelector(".arrow_left");

const dots = document.querySelector(".dots");
/****** demande apres ma soutenance */
let myDots = [];/*****mon tableau vide de dots */
/*****j'ai crée et ajoutes les elements dot dans une boucle */
for(let j = 0; j < slides.length; j++) {   /***** j'ai defini ma variable j pour initialiser mon compteur a 0;  */
/***** tant que j est inferieur a sildes.lenght, ma boucle continue de s"executer */
/***** i++ increment le compteur j de 1,,, cette partie est executée a la fin de chaque itération de boucle */
const elementDot = document.createElement("div");
console.log(elementDot);
elementDot.classList = "dot";
dots.appendChild(elementDot);
/***** methode push pour ajouter elementDot au tableau myDots */
myDots.push(elementDot);
}

myDots[0].classList.add("dot_selected");


const tagline = document.querySelector(".tagline p"); 

let i = 0 

arrowL.addEventListener("click", goLeft);
arrowR.addEventListener("click", goRight);

/***** update dot avec mydots */
function goLeft() { 
	myDots[i].classList.remove("dot_selected");
	i = (i-1 + slides.length) % slides.length; 
	myDots[i].classList.add("dot_selected");
	mySlide();
}

function goRight() {
	myDots[i].classList.remove("dot_selected"); 
	i = (i+1) % slides.length; 
	myDots[i].classList.add("dot_selected");
	mySlide();
}

function mySlide() {
	bannerImage.src = "assets/images/slideshow/" +slides[i].image;
	tagline.innerHTML = slides[i].tagLine; 
}

mySlide();





