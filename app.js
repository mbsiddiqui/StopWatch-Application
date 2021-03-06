/* initializing and declaring variables */
var interval;
var saveCounter = 0; /* to count save items */
var min = 0;
var sec = 0;
var msec = 0;
var hour = 0;
/* reading the fields */
var minCounter = document.getElementById("min");
var secCounter = document.getElementById("sec");
var msecCounter = document.getElementById("msec");
var hourCounter = document.getElementById("hour")
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
        /* appending '0' if second is 1-9*/
        if (sec >= 0 && sec <= 9) {
            secCounter.innerHTML = "0" + sec;
        }
        else {
            secCounter.innerHTML = sec;
        }
    }
    else if (sec === 60) {
        sec = 0;
        min++;
        /* appending '0' if minute is 1-9*/
        if (min >= 0 && min <= 9) {
            minCounter.innerHTML = "0" + min;
        }
        else {
            minCounter.innerHTML = min;
        }
    }
    else if (min === 60) {
        min = 0;
        hour++;
        /* appending '0' if hour is 1-9*/
        if (hour >= 0 && hour <= 9) {
            hourCounter.innerHTML = "0" + hour;
        }
        else {
            hourCounter.innerHTML = hour;
        }
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
    hour = 0;
    msecCounter.innerHTML = "00";
    secCounter.innerHTML = "00";
    minCounter.innerHTML = "00";
    hourCounter.innerHTML = "00";

    clearInterval(interval);
    startBtnId.disabled = false; /* enabling the start button */
    pauseBtnId.disabled = true; /* disabling the pause button */

    historyId.innerHTML = "(No data logs to display)"; /* clearing the histoty log */
}

/* save function */
function lap() {
    startBtnId.disabled = false; /* enabling the start button */

    var currentHour = hourCounter.innerHTML;
    var currentMin = minCounter.innerHTML;
    var currentSec = secCounter.innerHTML;
    var currentMsec = msecCounter.innerHTML;

    /* saving the currently displayed time in log  */
    saveCounter++;
    historyId.innerHTML += "<br>" + saveCounter + ". &nbsp;&nbsp;&nbsp;&nbsp;" + currentHour + " : " + currentMin + " : " + currentSec;
    /* if we want to limit user to save only 15 entreies in log */
    /*     if (saveCounter === 16) {
            alert("The 'History Log' limit exceeded. If you click on 'Save' again, all current log data will be lost.");
        }
        if (saveCounter === 17) {
            saveCounter = 0;
            historyId.innerHTML = ""
        } */
}