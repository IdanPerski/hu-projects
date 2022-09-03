export default Timer; 

const timersContainer = document.querySelector('#timers-container');
function createElementInTimerContainer(variable,tag,text,elementClass,evntListenerFunction){
    variable = document.createElement(tag);
    variable.innerText = text;
    timersContainer.appendChild(variable)
    variable.style.margin = "5px"
    variable.setAttribute('class', elementClass)
    variable.addEventListener('click',evntListenerFunction);
   
};



 

function Timer(initialTime){
    let interval= null
    let initialTimeMin = initialTime-1
    let initialTimeSec =59 
    
    const timerStartFunc = function(){
        if(interval !=null){
            console.log('not null');
            return
        } 
         if ( initialTimeSec===0) {
              console.log('initialTimeSec is 0');;
                //  clearInterval(interval) 
            }
       
    interval = setInterval(function(){
        const timer =  document.querySelector('.timer');
        timer.innerHTML= `${initialTimeMin}:${initialTimeSec--}`
            if (initialTimeSec === 0) {
            initialTimeMin--
            initialTimeSec = 59
           
            }
             
            
            
    },100)
   
    }
    
    function stopTimer(){
           clearInterval(interval) 
           interval = null
       
        
    }
    

    this.initialTime = initialTime;
    this.createTimer = function() {
    createElementInTimerContainer('timer','p',`${initialTime}:00`,'timer');
    createElementInTimerContainer('startButton','button','Start','startBtn',timerStartFunc);
    createElementInTimerContainer('stopButton','button','Stop','stopBtn',stopTimer);
    createElementInTimerContainer('clearButton','button','clear','clearBtn');

    };

  
    // pauseBtn.aDdEventListener('click',function(){
    //     console.log('pauseBtn clicked');
    //     clearInterval(initialTime)
    // })
// console.log(startBtn )

}

 
   






 


//  const timeInput = document.querySelector('#time-input');
//    timerElement.innerText= `${timeInput.value}`;
//     console.log(timerElement);

// export const name = 'Idan';
// export const number = 35;

// const fullName = {
//     name: 'idan',
//     last_name:'perski',
//     fname:function(name){
//         console.log('fname function',this.name, this.last_name);
//     }
// };

// export default fullName;
 