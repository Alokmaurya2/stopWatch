let hours = 0;
let mins = 0;
let secs = 0;
let intervalId; // variable to store interval ID
let checkStarting=false;

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const hoursElement = document.getElementById('hrs');
const minsElement = document.getElementById('mins');
const secsElement = document.getElementById('secs');

hours=parseInt(hoursElement.innerText)
mins=parseInt(minsElement.innerText)
secs=parseInt(secsElement.innerText)


pauseBtn.addEventListener('click',function(){
    checkStarting=false;
    clearInterval(intervalId)
})


startBtn.addEventListener('click', function() {
    if (!checkStarting) {
        checkStarting = true;
        console.log('starting');
        intervalId = setInterval(startStopWatch, 1000);
    }
});


function startStopWatch() {
    secs++;
    if (secs >= 60) {
        secs = 0;
        mins++;
        if (mins >= 60) {
            mins = 0;
            hours++;
        }
    }
    hoursElement.innerText = formatTime(hours);
    minsElement.innerText = formatTime(mins);
    secsElement.innerText = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

resetBtn.addEventListener('click', function() {
    checkStarting=false
    clearInterval(intervalId);
    hours = 0;
    mins = 0;
    secs = 0;
    hoursElement.innerText = '00';
    minsElement.innerText = '00';
    secsElement.innerText = '00';
});
