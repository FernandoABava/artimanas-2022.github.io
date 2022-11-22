import insertHeaderAndFooter from './insertHeaderAndFooter.js'
import {fetchProfile, fetchProfileList} from './fetchProfile.js'
import fetchTemplate from './fetchTemplate.js'
let profileData;

init();

async function init() {
	//insertHeaderAndFooter();
	profileData = await fetchProfile();
	populate();

	appendRandomObra();
}

async function populate() {

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

async function appendRandomObra() {
	const cardTemplate = await fetchTemplate('./componentes/card-obra/card-obra.html')
	let profileList = await fetchProfileList();

	let index = profileList.findLastIndex( perfil => perfil.id == profileData.id)
	profileList.splice( index, 1 )
	let proximoPerfil = profileList[ Math.floor( Math.random() * profileList.length ) ]

	const obraContainerEl = document.getElementById('card-prox-obra')
	obraContainerEl.innerHTML = cardTemplate;

	// const divEl = document.createElement('div')
	// divEl.innerHTML = cardTemplate;
	//
	// divEl.classList.add(
	// 	proximoPerfil.categoria.replace(' ', '-').toLowerCase()
	// )

	obraContainerEl.querySelector('.nombre-estudiante').innerText = proximoPerfil.nombre
	obraContainerEl.querySelector('.carta-imagen').style.backgroundImage = `url(${proximoPerfil.foto_portada})`
	obraContainerEl.querySelector('.titulo-obra').innerText = proximoPerfil.titulo_obra
	obraContainerEl.querySelector('.categoria-obra').innerText = proximoPerfil.categoria.toLowerCase()

	obraContainerEl.querySelector('a').href = `perfil.html?p=${proximoPerfil.id}`

	// obraContainerEl.append(divEl)
}
