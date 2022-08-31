import Timer from './timerV2.js' ;
const timeInput = document.querySelector('#time-input');
const timerContainer = document.querySelector('#timers-container');
function addTimer(){

    const userInitialTime = timeInput.value;
    const timer = new Timer (userInitialTime,timerContainer) 
    console.log('timer object', timer);
    timer.createTimer()

    
};





  const createTimerButton = document.querySelector('#create-timer');
createTimerButton.addEventListener('click', addTimer)


