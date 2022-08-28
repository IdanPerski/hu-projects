export default function Timer(){
    
    this.createTimer = function Timer(initialTime){
        let time = initialTime;
        TouchList.createTimer = function (){
            console.log('create timer', time);
            const timerElement = document.createElement('div');
            timerElement.innerText = time;

            document.querySelector('#timer-container').appendChild(timerElement);

        };

    }
    console.log('my timer');
}