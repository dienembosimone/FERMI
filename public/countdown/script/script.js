const daysElm = document.querySelector('#day');
const hoursElm = document.querySelector('#hour');
const minutesElm = document.querySelector('#minute');
const secondsElm = document.querySelector('#second');
const panelElm = document.querySelector('.panel')

const endDate = new Date("December 25 2022");
const endDateInMs = endDate.getTime();

const secondiInMs = 1000;
const minutiInMs = 60 * secondiInMs;
const oreInMs = 60 * minutiInMs;
const giorniInMs = 24 * oreInMs;


const counterTimer = setInterval(timer, 1);/*ho modificato questo valore*/

function timer(){
    const nowInMs = new Date().getTime();
    const diff = endDateInMs - nowInMs;
    console.log(diff);
    if(diff > 0){
        daysElm.innerHTML = Math.floor(diff / giorniInMs);
        hoursElm.innerHTML = Math.floor((diff % giorniInMs) / oreInMs);
        minutesElm.innerHTML = Math.floor((diff % oreInMs) / minutiInMs);
        secondsElm.innerHTML = Math.floor((diff % minutiInMs) / secondiInMs);
    }
    else{
        clearInterval(timer);
        panelElm.innerHTML="<h1>Buon Natale!<h1>"
    }

}