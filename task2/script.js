const btnOpen = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
    console.log('Hello world!');
});

const clickAlert = document.querySelector('#alert');
clickAlert.addEventListener('click', (e) => {
    alert(`Координаты: (${e.clientX},${e.clientY})`);
    });

const clickPrompt = document.querySelector('#prompt');
const name = prompt('Пожалуйста, представьтесь?');
if (name) {
  document.querySelector('#prompt').innerHTML = `<b>${name}</b>, добро пожаловать на сайт!`;
} else {
  document.querySelector('#prompt').innerHTML = '<b>Гость</b>, добро пожаловать на сайт!';
}