

const cuadradito = Array.from(document.getElementsByClassName("cuadradito"));

export default function initStepper() {


	const arteElectronico = document.querySelector(".arte-electrónico");
	const realidadAumentada = document.querySelector(".realidad-aumentada");
	const arteVisual = document.querySelector(".arte-visual");
	const videojuegos = document.querySelector(".videojuegos");
	const categorias = [arteElectronico,realidadAumentada,arteVisual,videojuegos];
	const cards = document.getElementsByClassName('card');



	cuadradito.forEach((item, i) => item.addEventListener('click', () => {  //añado evento onClick para que scrollee al hacer click en categoria.
		// categorias[i].scrollIntoView({ behavior: 'smooth' });
		scroll( 0, categorias[i].offsetTop - 64 );
	}));

	document.addEventListener('scroll', () => { // añado evento onScroll

		let lastItem = cuadradito[0]

		for (let i = 0; i < categorias.length; i++) {
			if (
				window.scrollY + 200  >= categorias[i].offsetTop &&  				// si el offset de la ventana es mayor al offset de la primer card
				window.scrollY  <= categorias[(i == 3) ? i : (i + 1)].offsetTop 	// de esa categoria y menor a la que le sigue,
			 ) {																	//	se activa la categoría
				lastItem=cuadradito[i];

				if(!lastItem.classList.contains("active")){

					for (let j = 0; j < cuadradito.length; j++) {
						cuadradito[j].previousElementSibling.className = "itemnombre";
						cuadradito[j].className = cuadradito[j].className.replace("active", "");
					}

					lastItem.classList.add("active");
					lastItem.previousElementSibling.classList.add("active");

				};
			 };
		};

		// if (window.innerWidth < 768) {
		// 	for (let i = 0; i < cards.length; i++) {
		// 		if (window.scrollY + 250 >= cards[i].offsetTop && window.scrollY  <= cards[i].offsetTop + cards[i].clientHeight - 200) {
		// 				cards[i].classList.add("active");
		// 		 } else {
		// 				cards[i].className = cards[i].className.replace("active", "");
		// 		 }
		// 	}
		// }
	});
}
