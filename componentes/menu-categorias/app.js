import obras from '../data/obras.json' assert {type: "json"}

const arteElectronico = document.getElementById("arteelectronico");
const realidadAumentada = document.getElementById("realidadaumentada");
const arteVisual = document.getElementById("artevisual");
const videojuegos = document.getElementById("videojuegos");
const categorias = [arteElectronico,realidadAumentada,arteVisual,videojuegos];

const cuadradito = Array.from(document.getElementsByClassName("cuadradito"));

cuadradito.forEach((item, i) => item.addEventListener('click', () => {  
	categorias[i].scrollIntoView({ behavior: 'smooth' });
})); 

document.addEventListener('scroll', () => { 

	let lastItem = cuadradito[0]

	for (let i = 0; i < categorias.length; i++) {
		if (
			window.scrollY + 200  >= categorias[i].offsetTop &&  
			window.scrollY  <= categorias[(i == 3) ? i : (i + 1)].offsetTop 
		 ) {																
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
});