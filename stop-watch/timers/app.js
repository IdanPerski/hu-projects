import Timer from './timers.js'; 

const timeInput = document.querySelector('#time-input');

function addTimer(){
    const newTimer = new Timer(timeInput.value);
    console.log(newTimer);
    newTimer.createTimer();

    
    // document.querySelector('.startBtn').addEventListener('click',newTimer.timerStartFunc)

}



const createTimerBtn = document.querySelector("#create-timer");
createTimerBtn.addEventListener('click',addTimer)



