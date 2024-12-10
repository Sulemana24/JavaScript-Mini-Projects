// Select DOM elements for the game
const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word"),
  inputField = document.querySelector("input"),
  timeText = document.querySelector(".time b"),
  scoreText = document.querySelector(".score"),
  highScoreText = document.querySelector(".high-score"); // New: Display high score
  const result = document.getElementById("result");
  const revealBtn = document.querySelector(".reveal-word");

// Declare global variables
let correctWord,
  timer,
  score = 0,
  highScore = localStorage.getItem("highScore") || 0; // Retrieve high score or initialize to 0

// Display the high score on load
highScoreText.innerText = highScore;

// Function to initialize the timer
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    clearInterval(timer);
    alert(`Time up! ${correctWord.toUpperCase()} was the correct word`);
    updateHighScore(); // Check and update high score
    initGame();
  }, 1000);
};

// Function to start or restart the game
const initGame = () => {
  initTimer(30); // Start the timer with 30 seconds
  let randomObj = words[Math.floor(Math.random() * words.length)]; // Random word
  let wordArray = randomObj.word.split(""); // Split word into letters
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // Shuffle letters
  }
  wordText.innerText = wordArray.join(""); // Display scrambled word
  hintText.innerText = randomObj.hint; // Display hint
  correctWord = randomObj.word.toLowerCase(); // Set correct word
  inputField.value = ""; // Clear input field
  inputField.setAttribute("maxlength", correctWord.length); // Limit input length
};

// Function to check the user's input
const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter a word");

  if (userWord !== correctWord) {
    return result.textContent = `"Ooops😏😏!! ${userWord.toUpperCase()} is not the correct word"`;
  };

  

  // If the guess is correct, increase the score and notify the player
  result.textContent = `"Congrats😃😃!! ${userWord.toUpperCase()} is the correct word"`;
  score++; // Increment score
  scoreText.innerText = score; // Update score display
  updateHighScore(); // Check and update high score
  initGame(); // Restart game
};

// Function to update the high score
const updateHighScore = () => {
  if (score > highScore) {
    highScore = score; // Update high score
    localStorage.setItem("highScore", highScore); // Save high score to localStorage
    highScoreText.innerText = highScore; // Update high score display
  }
};

// Function to reveal the correct word
const revealWord = () => {
  score--;
  scoreText.innerText = score;
  result.textContent = `"The correct word is: ${correctWord.toUpperCase()}"`;
  
  
  updateHighScore(); // Update the high score before resetting
  initGame(); // Restart the game
};



// Add event listener to the refresh button to reset the game
refreshBtn.addEventListener("click", () => {
  score = 0; // Reset score to 0
  scoreText.innerText = score; // Update score display
  result.textContent = "";
  initGame(); // Restart game
});

// Add event listener to the check button to validate the word
checkBtn.addEventListener("click", checkWord);

// Add event listener for the Reveal Word button
revealBtn.addEventListener("click", revealWord);

// Initialize the game
initGame();
