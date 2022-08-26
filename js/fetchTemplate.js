export default async function fetchTemplate(url) {
	try {
		return await fetch(url).then((response)=>response.text())
	} catch(err){
		console.error(err);
		return err
	}
}
