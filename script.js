const capitalizeForm = document.getElementById('capitalize-form');
capitalizeForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const inputElement = document.getElementById('text-to-capitalize');
	const textToCapitalize = inputElement.value;
	const capitalizedText = capitalize(textToCapitalize);
	const headerElement = document.getElementById('capitalized-text');
	headerElement.innerHTML = capitalizedText;
});

function capitalize(textToCapitalize) {
	if (textToCapitalize.trim().length === 0) {
		return '';
	}
	const capitalizedFirstChar = textToCapitalize[0].toUpperCase();
	const capitalizedText = capitalizedFirstChar + textToCapitalize.substring(1);
	return capitalizedText;
}
