var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var serverURL = 'https://api.funtranslations.com/translate/minion.json';

function getTranslationURL(text) {
	return serverURL + '?' + 'text=' + text;
}

function handleClick() {
	var inputText = txtInput.value;
	fetch(getTranslationURL(inputText))
		.then((response) => {
			response.json();
		})
		.then((response) => {
			outputDiv.innerText = response.contents.translated;
		})
		.catch((error) => console.log(error));
}

btnTranslate.addEventListener('click', handleClick);
