import fetchTemplate from './fetchTemplate.js'

export default async function inertHeaderAndFooter() {
	let headerHtml = await fetchTemplate('../componentes/header.html')
	let footerHtml = await fetchTemplate('../componentes/footer.html')
	document.body.insertAdjacentHTML('beforebegin', headerHtml)
	document.body.insertAdjacentHTML('afterend', footerHtml)
}
