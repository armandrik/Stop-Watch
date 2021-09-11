var minutes = 00;
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("sec");
var appendMinutes = document.getElementById("min");
var buttonStart = document.getElementById('start-watch');
var buttonStop = document.getElementById('stop-watch');
var buttonReset = document.getElementById('reset-watch');
var buttonLap = document.getElementById("lap-watch");
var ul = document.getElementById("lap-list");
var Interval;

buttonStart.onclick = function() {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
buttonStop.onclick = function() {
    clearInterval(Interval);
}
buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    ul.innerText = "";
}
buttonLap.onclick = function() {
    let li = document.createElement("li");
    li.classList.add("li-design");
    li.innerText = " - " + minutes + " : " + seconds + " : " + tens;
    ul.appendChild(li);
}

function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;

    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = seconds;
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }

}