let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minutisEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');

function setNewData() {
   const setTitle = prompt('Enter your Title');
document.getElementById('set-title').innerHTML = setTitle; 
}

const newYears = '1 jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totaleSeconds = new Date(newYearsDate - currentDate) / 1000;
    const days = Math.floor(totaleSeconds / 3600 / 24);
    const hours = Math.floor(totaleSeconds / 3600 % 24);
    const minutes = Math.floor(totaleSeconds / 60) % 60;
    const seconds = Math.floor(totaleSeconds) % 60;
    // console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutisEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000)