document.getElementById("incrementBtn").addEventListener("click",increase);

document.getElementById("decrementBtn").addEventListener("click",decrease);

document.getElementById("resetBtn").addEventListener("click",reset);

let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 0;

function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}

function increase(){
    counterValue++;
    updateCounterDisplay();
}

function decrease(){
    if(counterValue > 0){
        counterValue--;
    updateCounterDisplay();
    }
}

function reset(){
    counterValue = 0;
    updateCounterDisplay()

}