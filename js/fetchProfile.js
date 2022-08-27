async function fetchProfile() {
	const params = new URLSearchParams(document.location.search)
    const profileID = params.get('p') ? params.get('p') : ''
	console.log(profileID);

	try {
		const response = await fetch('../data/perfiles.json')
		const json = await response.json()
		return json.perfiles.find(item => item.id == profileID)
	} catch(err){
		console.error(err);
		return err
	}
}

async function fetchProfileList() {
	try {
		const response = await fetch('../data/perfiles.json')
		const json = await response.json()
		return json.perfiles
	} catch(err){
		console.error(err);
		return err
	}
}

export {fetchProfile, fetchProfileList}
