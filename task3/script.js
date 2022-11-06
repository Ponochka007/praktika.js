/*const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);
*/
const circle = document.querySelectorAll('#trafficLight');
const red = circle[0];
const yellow = circle[1];
const green = circle[2];

function fooRed() {
    this.style.background = "red";
    yellow.style.background = "";
    green.style.background = "";
  }

  function fooYellow() {
    this.style.background = "yellow";
    red.style.background = "";
    green.style.background = "";
  }

  function fooGreen() {
    this.style.background = "green";
    yellow.style.background = "";
    red.style.background = "";
  }
  
red.addEventListener("click", fooRed);
yellow.addEventListener("click", fooYellow);
green.addEventListener("click", fooGreen);