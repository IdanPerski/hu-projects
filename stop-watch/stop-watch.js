
const stopWatchView =  document.querySelector('#stop-watch-view');
const startStopBtn = document.querySelector('#toggle-stop-watch');
const resetBtn = document.querySelector('#reset-stop-watch');
const lapsView= document.querySelector('#laps-view');
const lapsBtn = document.querySelector('#stop-watch-laps');

let hundreds = 0
let seconds = 0
let minutes = 0

function getTimeString(){
      let secondsString = seconds;
   if (seconds < 10){
    secondsString = '0'+seconds;
   }
   const timeString = `${minutes}:${secondsString}:${hundreds}`

   return timeString
}


function displayTime(){
 
    stopWatchView.innerHTML = `${getTimeString()}`;

}

function addLap(){
    lapsView.innerHTML += `<li>${minutes}:${seconds}:${hundreds}</li>`
    
}


function handleTimeChange(){
    hundreds++;
    if(hundreds>99){
      hundreds=0;
      seconds++
      if(seconds>59){
        seconds = 0;
        minutes++;
      }  
    }
    displayTime()

}


let intervalId = null;
function toggleStopWatch() {
  console.log('intervalId', intervalId);
  if (intervalId == null) {
    startWatch()
  } else {
    //stop the stop watch
    stopWatch()
  }
}

function startWatch(){
    intervalId = setInterval(handleTimeChange, 10);
    startStopBtn.innerHTML = 'Stop';
}

function stopWatch(){
    clearInterval(intervalId);
    startStopBtn.innerHTML = 'Start';
    intervalId = null;
}

function resetStopWatch() {
    hundreds =0
    seconds =0
    minutes =0
    displayTime()
}
resetBtn.addEventListener('click',resetStopWatch)
startStopBtn.addEventListener('click',toggleStopWatch);
lapsBtn.addEventListener('click', addLap)