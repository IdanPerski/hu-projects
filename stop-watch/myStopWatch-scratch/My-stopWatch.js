const StopWatch = document.querySelector('#stop-watch');
const startStopBtn = document.querySelector('#stratStop-Btn');
const resetBtn = document.querySelector('#resrt-Btn');
const lapBtn = document.querySelector('#lap-Btn');
const DisplayLap = document.querySelector('#lap-view');


let hund = 0;
let sec = 0;
let min = 0;


function twoDigitsWatch(){
    let secsString = '0'+sec
    let minString = '0'+min 
    if(sec<10 ){
       
        secsString = '0'+sec
    }
   
    if(min<10){
        minString= '0'+min
    }
    
     const twoDigitsWatch =  StopWatch.innerHTML = `${minString}:${secsString}:${hund}`
     return twoDigitsWatch
}


let watchInterval = null;

function DisplayBtn(text,removeClass,addClass){
    startStopBtn.innerHTML= text
      startStopBtn.classList.remove(removeClass)
      startStopBtn.classList.add(addClass)
}

function startBtn(){
    watchInterval =  setInterval(function(){
    StopWatch.innerHTML = `${min}:${sec}:${hund++}`
        if(hund>99){
        hund=0
        sec++  
        if(sec>59){
        sec=0
        min++   
        } 
     }     
    },10)
     DisplayBtn('Stop','btn-success','btn-danger')
}

function stopBtn(){
    clearInterval(watchInterval)
    DisplayBtn('Start','btn-danger','btn-success')
    watchInterval = null
}

function resetWatch(){
 hund = 0;
 sec = 0;
 min = 0;
 StopWatch.innerHTML = `${min}:${sec}:${hund}`
 
}




function StartStopWatch(){
    twoDigitsWatch()
    if(watchInterval===null){
    startBtn()  
    }
    else{
    stopBtn()
     }
}



function addLap(){
    DisplayLap.innerHTML+=`<li class= "mt-1 d-flex justify-content-between " > 
                            <p class="text-decoration-none">${ StopWatch.innerHTML }</p> 
                            <button class= "btn btn-danger ts-1" >Delete</button>
                            <li>` 
}






 startStopBtn.addEventListener('click',StartStopWatch )
 resetBtn.addEventListener('click',resetWatch )
 lapBtn.addEventListener('click',addLap )