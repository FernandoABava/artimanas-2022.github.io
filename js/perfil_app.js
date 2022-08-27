import insertHeaderAndFooter from './insertHeaderAndFooter.js'
import {fetchProfile} from './fetchProfile.js'

init();

async function init() {
	insertHeaderAndFooter();
	populate();
}

async function populate() {
	let profileData = await fetchProfile();

	let nombreEl = document.getElementById('nombre')
	let perfilImgEl = document.getElementById('perfil-img')
	let resumenEl = document.getElementById('resumen')
	let tituloTesinaEl = document.getElementById('titulo-tesina')
	let tituloObraEl = document.getElementById('titulo-obra')

	nombreEl.innerText = profileData.nombre
	perfilImgEl.src = profileData.foto_perfil
	perfilImgEl.alt = 'Foto de perfil de ' + profileData.nombre
	resumenEl.innerText = profileData.descripcion
	tituloTesinaEl.innerText = profileData.titulo_tesina
	tituloObraEl.innerText = profileData.titulo_obra
}
