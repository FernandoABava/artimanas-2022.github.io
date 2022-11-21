async function fetchProfile() {
	const params = new URLSearchParams(document.location.search)
    const profileID = params.get('p') ? params.get('p') : ''
	console.log(profileID);

	try {
		const response = await fetch('./data/perfiles.json')
		const json = await response.json()
		return json.perfiles.find(item => item.id == profileID)
	} catch(err){
		console.error(err);
		return err
	}
}

async function fetchProfileList() {
	try {
		const response = await fetch('./data/perfiles.json')
		const json = await response.json()
		return sortCategoria(json)
	} catch(err){
		console.error(err);
		return err
	}
}

function sortCategoria(json) {
	return json.perfiles.sort((a, b) => {
		let result;
		switch (a.categoria.toLowerCase()) {
			case 'arte electrónico':
				result = -1;
				break;
			default:
			case 'realidad aumentada':
				result = b.categoria.toLowerCase == 'arte electrónico' ? 1 : -1;
				break;
			case 'arte visual':
				result = b.categoria.toLowerCase == 'arte electrónico'
				 		|| b.categoria.toLowerCase == 'realidad aumentada'
						? 1 : -1;
				break;
			case 'videojuegos':
				result = 1;
				break;
		}
		return result;
	})
}

export {fetchProfile, fetchProfileList}
