
const stopWatchView =  document.querySelector('#stop-watch-view');

let hundreds = 44
let seconds = 32
let minutes = 12

function displayTime(){
   
    stopWatchView.innerHTML = `${minutes}:${seconds}:${hundreds}`;

}

displayTime()