// Variables
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
let counter = 0;

// Positionner les slides en left
slides.forEach((slide, index) => {
	slide.style.left = `${ index * 100 }%`;
});

// Événements
nextBtn.addEventListener('click', () => {
	counter++;
	carousel();
});
prevBtn.addEventListener('click', () => {
	counter--;
	carousel();
});

// Fonctions
const carousel = () => {

	// Slides en boucle
	// if (counter === slides.length){
	// 	counter = 0;
	// }
	// if (counter < 0){
	// 	counter = slides.length - 1;
	// }

	// Slides avec stop à la limite
	if (counter < slides.length - 1){
		nextBtn.style.display = 'block';
	} else {
		nextBtn.style.display = 'none';
	}
	if (counter > 0){
		prevBtn.style.display = 'block';
	} else {
		prevBtn.style.display = 'none';
	}

	/* Nous déplaçons l'ensemble des slides par rapport à la valeur
	de counter, s'il passe négatif (--) cela déplace les images
	vers la droite */
	slides.forEach((slide) => {
		slide.style.transform = `translateX(-${ counter * 100 }%)`;
	});
};

// Init, nous cachons le prevBtn car 1ère slide avec approche limite
prevBtn.style.display = 'none';