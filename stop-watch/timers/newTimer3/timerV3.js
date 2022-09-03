export default function Timer(initialTime,createTimerElements , min,sec, descriptionElement){
    
    
    const timerContainer = document.createElement('div');
    
   
    this.initialTime =initialTime;
    this.descriptionElement =descriptionElement.value
  
     
    let displayTime;
    let timerInterval;
    
    

    function createButton(element,innerText,setclass,eventFunction){
    const newElement = document.createElement(element);
    newElement.innerText = innerText;
    timerContainer.appendChild(newElement);
    newElement.setAttribute('class',setclass);
    newElement.addEventListener('click',eventFunction)
    
    }

    function showTime(){
        displayTime = document.createElement('span');
        displayTime.innerText = initialTime
        createTimerElements.appendChild(displayTime);
        displayTime.classList.add('bg-danger')
        displayTime.classList.add('fs-5')

        
    }

    function runTimer(){
        
        sec--
        initialTime= min+':'+sec;
        displayTime.innerText =initialTime;
        if(sec<=0){
            stopTimer()
        
        }
      
    } 

    function stopTimer(){
        clearInterval(timerInterval)

    }

    function startTimer(){
       
       timerInterval =  setInterval(runTimer,1000)
       
   
    }

    function createTimerContainer(){
        showTime()
        createTimerElements.appendChild(timerContainer);
        timerContainer.style.height = '100px'
        timerContainer.setAttribute('class','bg-dark '+'p-3 '+'timer-and-buttons')
        createButton('div', descriptionElement.value,'text-center bg-danger' );
        createButton('button','Start','startBtn',startTimer)
        createButton('button','Stop','stopBtn',stopTimer)
        createButton('button','Delete','deleteBtn')
        
    }

   
    
    this.createTimer = function(){
         createTimerContainer()
        
       }

}




