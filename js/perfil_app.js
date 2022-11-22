import insertHeaderAndFooter from './insertHeaderAndFooter.js'
import {fetchProfile} from './fetchProfile.js'

init();

async function init() {
	//insertHeaderAndFooter();
	populate();
}

async function populate() {
	let profileData = await fetchProfile();

	const portadaEl = document.querySelector('.portada')
	const tituloObraEl = document.querySelector('#titulo_obra')
	const categoriaEl = document.querySelector('#categoria')
	const fotoPerfilEl = document.querySelector('#foto_perfil')
	const nombreEl = document.querySelector('#nombre')
	const videoEl = document.querySelector('#video')
	const descripcionEl = document.querySelector('#descripcion_obra')
	const fotosObraEl = document.querySelector('#fotos_obra')
	const tituloTesinaEl = document.querySelector('#titulo_tesina')
	const linkPdfEl = document.querySelector('#link_pdf')
	const proxObra = document.querySelector('#card-prox-obra')

	portadaEl.style.backgroundImage = `linear-gradient(180deg, rgba(7, 7, 7, 0) 0%, #070707 100%), url(${profileData.foto_portada})`
	tituloObraEl.innerText = profileData.titulo_obra
	categoriaEl.innerText = profileData.categoria
	fotoPerfilEl.src = profileData.foto_perfil
	foto_perfil.alt = `Foto de ${profileData.nombre}`
	nombreEl.innerText = profileData.nombre
	videoEl.innerHTML = profileData.video

	// DESCRIPCION

	let parrafos = profileData.descripcion_obra.split('<br>')
	let imagenes = profileData.fotos_obra

	parrafos.forEach((bloque, i) => {
		let p = document.createElement('p');
		p.innerText = bloque;
		p.classList.add('descripcion-bloque')

		descripcionEl.appendChild(p)

		if(!imagenes[i]) return;

		let img = document.createElement('img')
		img.classList.add('obra-img')
		img.classList.add('mobile')
		img.src = imagenes[i].src
		img.alt = imagenes[i].alt

		descripcionEl.appendChild(img)
	});

	imagenes.forEach((imagen, i) => {
		let img = document.createElement('img')
		img.classList.add('obra-img')
		img.src = imagen.src
		img.alt = imagen.alt

		fotos_obra.appendChild(img)

		if(i < parrafos.length) return

		let newImg = img.cloneNode();
		newImg.classList.add('mobile')
		descripcionEl.appendChild(newImg)
	});


	// FIN DESCRIPCION

	tituloTesinaEl.innerText = profileData.titulo_tesina
	link_pdf.href = profileData.pdf
}
