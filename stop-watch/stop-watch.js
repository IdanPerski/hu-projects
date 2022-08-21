
const stopWatchView =  document.querySelector('#stop-watch-view');

let hundreds = 0
let seconds = 0
let minutes = 0

function displayTime(){
   
    stopWatchView.innerHTML = `${minutes}:${seconds}:${hundreds}`;

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


setInterval(handleTimeChange,10)

clearInterval()