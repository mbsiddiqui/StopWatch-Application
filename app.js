/* initializing and declaring variables */
var interval;
var saveCounter = 0; /* to count save items */
var min = 0;
var sec = 0;
var msec = 0;
/* reading the fields */
var minCounter = document.getElementById("min");
var secCounter = document.getElementById("sec");
var msecCounter = document.getElementById("msec");
var startBtnId = document.getElementById("startBtn");
var pauseBtnId = document.getElementById("pauseBtn");
var historyId = document.getElementById("history");
historyId.innerHTML = "(No data logs to display)"; /* initial text in the histoty log */

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
    pauseBtnId.disabled = false; /* enabling the pause button */
}

/* pause function */
function pause() {
    clearInterval(interval);
    startBtnId.disabled = false; /* enabling the start button */
}

/* reset function */
function reset() {
    saveCounter = 0; /* reseting the save items counter */
    msec = 0;
    sec = 0;
    min = 0;
    msecCounter.innerHTML = "00";
    secCounter.innerHTML = "00";
    minCounter.innerHTML = "00";

    clearInterval(interval);
    startBtnId.disabled = false; /* enabling the start button */
    pauseBtnId.disabled = true; /* disabling the pause button */

    historyId.innerHTML = "(No data logs to display)"; /* clearing the histoty log */
}

/* save function */
function save() {
    startBtnId.disabled = false; /* enabling the start button */

    var currentMin = minCounter.innerHTML;
    var currentSec = secCounter.innerHTML;
    var currentMsec = msecCounter.innerHTML;

    /* saving the currently displayed time in log  */
    saveCounter++;
    historyId.innerHTML = saveCounter + ". &nbsp;&nbsp;&nbsp;&nbsp;" + currentMin + " : " + currentSec + " : " + currentMsec;
    /* if we want to limit user to save only 15 entreies in log */
/*     if (saveCounter === 16) {
        alert("The 'History Log' limit exceeded. If you click on 'Save' again, all current log data will be lost.");
    }
    if (saveCounter === 17) {
        saveCounter = 0;
        historyId.innerHTML = ""
    } */
}