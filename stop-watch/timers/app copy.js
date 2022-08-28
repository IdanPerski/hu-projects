import Timer from './timers.js'; 

const t1 = new Timer(50);
console.log('timer 1', t1);

const t2 = new Timer(40);
console.log('timer 2', t2);


const createTimerBtn = document.querySelector("#create-timer");






function createTimer(){
   
    const newTimer = new Timer(timeInput.value);
    console.log(newTimer);
    const timerElement = document.createElement('div')
    timerElement.innerText= `${timeInput.value}`;

    console.log(timerElement);
    timersContainers.append(timerElement)

    const startBtn = document.createElement('button');
    startBtn.innerText = 'Start';
    timerElement.appendChild(startBtn)
}

createTimerBtn.addEventListener('click',createTimer)







// import {name, number} from './timers.js';
// console.log('name',name);
// console.log('number',number);

// import fullName from './timers.js';

// fullName.fname()