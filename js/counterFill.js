const titleSpan = document.getElementById('title-span');
const counterText = document.getElementById('counter');

const today = new Date();
const fechaDeReferencia = new Date(2022, 8, 4, 18);
const artimaniasDate = new Date(2022, 10, 26, 18);

export default function setCounterFill() {
	let tiempoQueFalta = ( artimaniasDate.getTime() - today.getTime() )

	let diasQueFalta = Math.floor((((tiempoQueFalta / 1000) / 60) / 60)/24);
	counterText.innerText = `faltan ${diasQueFalta} días`

	tiempoQueFalta /= artimaniasDate.getTime() - fechaDeReferencia.getTime();
	let fill = (tiempoQueFalta) * 100.0;
	titleSpan.style.transition = 'all 2s ease-in-out'
	titleSpan.style.clipPath = `inset( ${fill}% 0 0 0)`

	return tiempoQueFalta;
}
