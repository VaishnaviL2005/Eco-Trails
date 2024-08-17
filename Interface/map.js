// js Fetch code 
const url = 'https://irctc1.p.rapidapi.com/api/v1/searchStation?query=BJU';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '723347b626msh27f396bcefaec34p1e99cejsn5aa6678aece1',
		'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
//js Query code
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation?query=BJU',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '723347b626msh27f396bcefaec34p1e99cejsn5aa6678aece1',
		'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
//XML HttpRequest
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://irctc1.p.rapidapi.com/api/v1/searchStation?query=BJU');
xhr.setRequestHeader('X-RapidAPI-Key', '723347b626msh27f396bcefaec34p1e99cejsn5aa6678aece1');
xhr.setRequestHeader('X-RapidAPI-Host', 'irctc1.p.rapidapi.com');

xhr.send(data);
//AXIOS
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
  params: {query: 'BJU'},
  headers: {
    'X-RapidAPI-Key': '723347b626msh27f396bcefaec34p1e99cejsn5aa6678aece1',
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


//openAPI2.0 js fetch
const url = 'https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2ef1b8e43msh0044b05bb6ed393p197169jsnc8cf84f09970',
		'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

//openAPI2.0 jquery 
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2ef1b8e43msh0044b05bb6ed393p197169jsnc8cf84f09970',
		'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
