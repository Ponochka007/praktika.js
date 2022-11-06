let form = document.querySelector('form');
let text = document.querySelector('input');
let message = document.querySelector('#duplicateField');
let btn = document.querySelector('button');



document.addEventListener('submit', (e) => {
    e.preventDefault(); 
    e.target.reset(); 
});

/* document.addEventListener('message', (e) => {
     e.preventDefault(); 
     e.target.reset(); 
 });*/

form.onsubmit = function (e) {
    e.preventDefault();
    message.textContent = text.value;
    console.log(text.value);

};


btn.addEventListener("click", () => {
    message.style.display = 'none';

});

text.oninput = function () {
    duplicateField.innerHTML = text.value;

};
