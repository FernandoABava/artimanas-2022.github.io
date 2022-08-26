import fetchTemplate from './fetchTemplate.js'
// Esto debería funcionar :(
// import * as headerHtml from '../componentes/header.html'
// import * as footerHtml from '../componentes/footer.html'

let headerHtml = await fetchTemplate('../componentes/header.html')
let footerHtml = await fetchTemplate('../componentes/footer.html')

console.log("ARTIMAÑAS :D")
window.onload = async (event)=>{
	document.body.insertAdjacentHTML('beforebegin', headerHtml)
	document.body.insertAdjacentHTML('afterend', footerHtml)
}
