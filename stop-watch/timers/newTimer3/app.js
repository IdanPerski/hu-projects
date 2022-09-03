import Timer from './timerV3.js' ;
let minutes = document.querySelector('#time-input-min');
let seconds = document.querySelector('#time-input-sec');
let description = document.querySelector('#description');
const timerContainer = document.querySelector('#timers-container');
function addTimer(){
  //  minutes = minutes.value;
  //  seconds = seconds.value;
    let initialTime= minutes.value+":"+seconds.value
    const timer = new Timer (initialTime ,timerContainer,minutes,seconds,description) 
    console.log('timer object', timer);
    timer.createTimer()
    

};

const createTimerButton = document.querySelector('#create-timer');
createTimerButton.addEventListener('click', addTimer)


