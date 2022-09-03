//timer.js
export default function Timer(initialTime) {
  let time = initialTime;
  let timerElement;
  let timeView;
  let intervalId;
  let isTimerRunnig =false

  function displayTime(){
    time--;
    timeView.innerText = time
    if (time==0) {
        stopTimer();
        return;
    }
  }

  function startTimer() {
     if (isTimerRunnig) {
    return;
   }
   intervalId =  setInterval(displayTime,1000)
   isTimerRunnig = true
  }

  function stopTimer(){
    clearInterval(intervalId);
    isTimerRunnig = false;
  }

  function deleteTimer() {
    timerElement.remove()
  }

//   function createStartButton() {
//     const startButton = document.createElement('button');
//     startButton.innerText = 'Start';
//     startButton.addEventListener('click', startTimer);
//     timerElement.appendChild(startButton);
//   }

//   function createDeleteButton() {
//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';
//     deleteButton.addEventListener('click', deleteTimer);
//     timerElement.appendChild(deleteButton);
//   }

//   function createPauseButton(){
//     const pauseButton = document.createElement('button');
//     pauseButton.innerText = 'Pause';
//     pauseButton.addEventListener('click',stopTimer)
//     timerElement.appendChild(pauseButton);

//   }

   function createButton(buttonText, eventFunction){
    const button = document.createElement('button');
    button.innerText = buttonText
    button.addEventListener('click',eventFunction)
    timerElement.appendChild(button) 
   }

  function createTimeView(){
    timeView = document.createElement('span');
    timerElement.appendChild(timeView);
  }

  this.createTimer = function () {
    console.log('create timer', time);

    timerElement = document.createElement('div');
   

    createTimeView()
     timeView.innerText = time;
    // createStartButton();
    // createPauseButton();
    // createDeleteButton();
    createButton('Start', startTimer);
    createButton('Pause', stopTimer);
    createButton('Delete', deleteTimer);

    document.querySelector('#timers-container').appendChild(timerElement);
  };
}
