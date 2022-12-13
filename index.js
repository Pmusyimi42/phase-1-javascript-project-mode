const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fab9a53a39mshe9809b23c7afb54p11725cjsnb80dfbbd2ffe',
		'X-RapidAPI-Host': 'game-of-thrones-quotes.p.rapidapi.com'
	}
};

fetch('https://game-of-thrones-quotes.p.rapidapi.com/api/quote/by/tyrion_lannister', options)
	.then(response => response.json())
	.then(response => console.log(response))
