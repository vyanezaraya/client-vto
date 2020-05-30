function ping(){
	const url = 'http://172.21.0.2/ping' //'https://swapi.co/api/people/1' //'https://pokeapi.co/api/v2/pokemon/1/' //http://localhost:5000/ping'

	 fetch(url)
	 .then(response => response.json())
	 .then(err => console.log(err))
	 
}