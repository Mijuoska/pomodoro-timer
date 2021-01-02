var sec = 0
var min = 0
var sessioncount = 0
var seczero = document.getElementById("sec-zero")
var minzero = document.getElementById("min-zero")
var timer


function runSession(session) {
    timer = setInterval(session, 1000)
}

function incrementTime() {
    var secZero = document.querySelector('#sec-zero')
    var minZero = document.querySelector('#min-zero')
    document.getElementById('sec').innerHTML = sec++;
    if (sec > 10) {
        secZero.classList.add("hidden")
    } if (sec == 61) {
        sec = 0
        secZero.classList.remove("hidden")
        min++;
        if (min >= 10) {
            minZero.classList.add("hidden")
        }
        document.getElementById('sec').innerHTML = sec++;
        document.getElementById('min').innerHTML = min;
    }
}




function workingSession() {
    var workinterval = Number(document.getElementById('work').value)
    incrementTime()
    if (min == workinterval) {
        playSound()
        resetTimer(timer)
        sessioncount++;
        document.getElementById('sessioncount').innerHTML = sessioncount;
        runSession(breakSession)
    }
}

function breakSession() {
    var breakinterval = 0
    if (sessioncount % 4 == 0) {
        breakinterval = 10;
    } else {
        breakinterval = Number(document.getElementById('break').value)
    }
    incrementTime()
    if (min == breakinterval) {
        playSound()
        resetTimer(timer)
        runSession(workingSession)
    }
}



function resetTimer(timer) {
    clearInterval(timer)
    document.getElementById('sec').innerHTML = sec = 0;
    document.getElementById('min').innerHTML = min = 0;
    minzero.classList.remove('hidden')
    seczero.classList.remove('hidden')
}


function resetTimerButton(timer) {
    clearInterval(timer)
    document.getElementById('sec').innerHTML = sec = 0;
    document.getElementById('min').innerHTML = min = 0;
    minzero.classList.remove('hidden')
    seczero.classList.remove('hidden')
    sessioncount = 0;
}

 function playSound() {
 var audio = document.getElementById("audio");
     audio.play();

}
 
