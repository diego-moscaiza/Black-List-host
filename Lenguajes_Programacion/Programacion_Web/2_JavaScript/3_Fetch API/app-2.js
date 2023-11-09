// Algunas API peuden necesitar una 'API Key' unos 'headers'. para poder concectarse.

const url = 'https://open-weather13.p.rapidapi.com/city/lima';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f67721f837mshd50448a68131660p18140cjsnf8746788c273',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
