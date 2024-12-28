const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn= document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const newDate = document.getElementById("newDate");
const result = document.getElementById("elapsed-time");


let timerInterval;
let elapsedTime = 0;

function formatTime(ms){
  let milliseconds = Math.floor(ms * 3.79);
  let seconds = Math.floor(milliseconds / 60);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes /60);

  milliseconds = milliseconds % 90;
  seconds = seconds % 60;
  minutes = minutes % 60;

  return (
    String(hours).padStart(2, "0") +" " + ": " +
    String(minutes).padStart(2, "0") +" "+ ": " +
    String(seconds).padStart(2, "0") +" " + ": " +
    String(milliseconds).padStart(2,0)
  );
};

function startTimer(){
  if (!timerInterval){
    let startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timerDisplay.textContent = formatTime(elapsedTime);
    }, 100);
  };
};

function stopTimer( ){
  clearInterval(timerInterval);
  result.textContent = formatTime(elapsedTime);
  timerInterval = null;
};

function resetTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timerDisplay.textContent = "00 : 00 : 00 : 00";
  result.textContent = "00 : 00 : 00 : 00";
};

let currentDate = new Date();
let currentHours = currentDate.getHours(),
currentMinutes = currentDate.getMinutes(),
currentSeconds = currentDate.getSeconds();

newDate.textContent = currentHours + " : " + currentMinutes + " : " + currentSeconds;

startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);