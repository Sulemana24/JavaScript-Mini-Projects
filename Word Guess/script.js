const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hint = document.querySelector(".hint span");
const wrongLetter = document.querySelector(".wrong-letter");
const guessLeft = document.querySelector(".guess-left span");
const typingInput = document.querySelector(".typing-input");

let word, incorrects =[], correct = [], maxGuesses;

function randomWord() {
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranObj.word;
  maxGuesses = word.length-1; incorrects =[], correct = []
  
  hint.innerText = ranObj.hint;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrects;

  let html = '';
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  };
  inputs.innerHTML = html;
  
  
};

randomWord();

function initGame(e) {
  let key = e.target.value;
  if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`) && !correct.includes(key)){
    if(word.includes(key)) {
      for (let i = 0; i < word.length; i++){
        if (word[i] === key){
          correct.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }; 
      };
      /* console.log("found") */
    } else{
      maxGuesses--;
      incorrects.push(`${key}`);
      /* console.log("not-found") */
    };
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects;
  };
  typingInput.value = '';

  setTimeout(() => {
    
  if(correct.length === word.length){
    alert("You won!")
    randomWord();

  }else if(maxGuesses < 1){
    alert("Game Over, Try again please");
    for (let i = 0; i < word.length; i++){
        inputs.querySelectorAll("input")[i].value = word[i];
      }; 
  }
  });
  
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());