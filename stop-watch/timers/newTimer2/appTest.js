
 const createTimerButton = document.querySelector('#create-timer');
 function disableButton(inputValue) {
            console.log(inputValue);
            if (inputValue === '0') {
                console.log('input is 0');
                createTimerButton.disabled = true

            }
            else {
                createTimerButton.disabled = false
            }
        }