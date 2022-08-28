//stop watch varibales
let hund = 0;
let sec = 0;
let min = 0;
const StopWatch = document.querySelector('#stop-watch');
const startStopBtn = document.querySelector('#stratStop-Btn');
const resetBtn = document.querySelector('#resrt-Btn');

//laps-counter varibales
const lapBtn = document.querySelector('#lap-Btn');
const DisplayLap = document.querySelector('#lap-view');
let  lapsArray=[]
let idLapCounter = 0


function twoDigitsWatch(){
    let secsString = '0'+sec
    let minString = '0'+min 
    if(sec<10 ){
        secsString = '0'+sec
    }
    if(min<10){
        minString= '0'+min
    }
     const twoDigitsWatch =  `${minString}:${secsString}:${hund}`
     return twoDigitsWatch
}

function DisplayBtn(text,removeClass,addClass){
    startStopBtn.innerHTML= text
      startStopBtn.classList.remove(removeClass)
      startStopBtn.classList.add(addClass)
}

function digitsChange(){
     if(hund>99){
        hund=0
        sec++  
        if(sec>59){
        sec=0
        min++   
        } 
     } 
}


let watchInterval = null;





function startBtn(){
    watchInterval =  setInterval(function(){
    StopWatch.innerHTML = `${min}:${sec}:${hund++}`
    digitsChange()
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


function displayHtmlLap (){
        DisplayLap.innerHTML+=`<tr class= "mt-1 d-flex justify-content-between" id='lap-${idLapCounter}'> 
                                <td class="text-decoration-none" id='lap-${idLapCounter}-result'>
                                    ${ StopWatch.innerHTML }
                                </td> 
                                <td>
                                    <button class= "btn btn-sm btn-outline-danger " id='delete-lap-${idLapCounter}' >
                                    <i class="bi bi-trash ts-1"></i>
                                    </button>
                                </td>
                             </tr>`
}


function returnLapResultTagId(){
    let createId = `lap-${idLapCounter}-result`
    return document.getElementById(createId)
}




function addLap(){
    idLapCounter++
    displayHtmlLap ()
    returnLapResultTagId()
    console.log(returnLapResultTagId().innerHTML);
    lapsArray.push(returnLapResultTagId().innerHTML)  
    // console.log(lapsArray);
    

     
    let lapAdded = document.getElementById(`lap-${idLapCounter}`)
    let deleteBtn=document.getElementById(`delete-lap-${idLapCounter}`)
     console.log(deleteBtn);
    deleteBtn.addEventListener('click',function(){
     let tableRows = document.getElementsByTagName('tr');
     console.log(tableRows);
})
                        
}

// document.getElementById('test').addEventListener('click',function(){
//     console.log(document.getElementById('lap-1-result').innerHTML);
// })
  
// let deleteBtn=document.getElementById(`delete-lap-${idLapCounter}`)
// console.log(deleteBtn);
 





 startStopBtn.addEventListener('click',StartStopWatch )
 resetBtn.addEventListener('click',resetWatch )
 lapBtn.addEventListener('click',addLap )
