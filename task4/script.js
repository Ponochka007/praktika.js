let linkPrompt = document.querySelector('a');

linkPrompt.addEventListener('click', function(event) {
	let result = prompt('Ваше имя?', 'Иван');
    const userTextField = document.querySelector('a');
    userTextField.textContent = result;
    console.log('Текст в #link изменён на', result);
    event.preventDefault();
});