let msec = 0;
let sec = 0;
let min = 0;

let millisec = document.getElementById("msec");
let seconds = document.getElementById("sec");
let minutes = document.getElementById("min");
let stop;
let startBtnPause = false;

function timer() {
    msec++;
    if (msec < 10) {
        millisec.innerHTML = "0" + msec;
    }
    else {
        millisec.innerHTML = msec;
    }
    if (msec >= 100) {
        sec++;
        msec = 0;
        if (sec < 10) {
            seconds.innerHTML = "0" + sec;
        }
        else {
            seconds.innerHTML = sec;
        }
    }
    else if (sec >= 60) {
        min++;
        sec = 0;
        if (min < 10) {
            minutes.innerHTML = "0" + min;
        }
        else {
            minutes.innerHTML = min;
        }
    }
}
function startBtn() {
    if(!startBtnPause) {
        stop = setInterval(timer, 10);
        startBtnPause.disabled = true;
    }
}

function stopBtn() {
    clearInterval(stop);        
}


let resetBtn = document.querySelector("#resetbtn");
resetBtn.addEventListener("click", function reset() {
    msec = 00;
    sec = 00;
    min = 00;
    minutes.innerHTML = "0" + min;
    seconds.innerHTML = "0" + sec;
    millisec.innerHTML = "0" + msec;
    stop;
})