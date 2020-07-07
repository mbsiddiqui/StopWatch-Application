/* reading the fields */
var interval;
var min = 0;
var sec = 0;
var msec = 0;
var minCounter = document.getElementById("min");
var secCounter = document.getElementById("sec");
var msecCounter = document.getElementById("msec");
var startBtnId = document.getElementById("startBtn");

/* stop-watch */
function stopWatch() {
    msec++;
    msecCounter.innerHTML = msec;
    /* sec and min counter */
    if (msec === 100) {
        msec = 0;
        sec++;
        secCounter.innerHTML = sec;
    }
    else if (sec === 60) {
        sec = 0;
        min++;
        minCounter.innerHTML = min;
    }
}

/* start function */
function start() {
    interval = setInterval(stopWatch, 10);
    startBtnId.disabled = true; /* disabling the start button */
}

/* pause function */
function pause() {
    clearInterval(interval);
    startBtnId.disabled = false; /* enabling the start button */
}

/* reset function */
function reset() {
    msec = 0;
    sec = 0;
    min = 0;
    msecCounter.innerHTML = "00";
    secCounter.innerHTML = "00";
    minCounter.innerHTML = "00";
    clearInterval(interval);
    startBtnId.disabled = false; /* enabling the start button */
}

/* save function */
function save(){
    startBtnId.disabled = false; /* enabling the start button */
    
    var historyId = document.getElementById("history");
    var currentMin = minCounter.innerHTML;
    var currentSec = secCounter.innerHTML;
    var currentMsec = msecCounter.innerHTML;

    var currentMin = currentMin.toString();
    var currentSec = currentSec.toString();
    var currentMsec = currentMsec.toString();
    var currentCount = currentMin + " : " + currentSec + " : " + currentMsec;
    historyId.innerHTML = document.write("<br>" + currentCount);
}