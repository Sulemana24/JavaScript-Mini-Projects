
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?";



const passwordForm = document.getElementById("password-form");
const passwordDisplay = document.getElementById("password-display");
const copyButton = document.getElementById("copy-button");

passwordForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const length = parseInt(document.getElementById('length').value);
  const includeUppercase = document.getElementById('include-uppercase').checked;
  const includeLowercase = document.getElementById('include-lowercase').checked;
  const includeNumbers = document.getElementById('include-numbers').checked;
  const includeSymbols = document.getElementById('include-symbols').checked;

  let password = ""
  if (includeUppercase) password += UPPERCASE;
  if (includeLowercase) password += LOWERCASE;
  if (includeNumbers) password += NUMBERS;
  if (includeSymbols) password += SYMBOLS;

  if(password === ""){
    passwordDisplay.innerText = 'Please select at lease one character type';
    copyButton.disabled = true;
    return;
  };

  let strongPass = "";

  for (let i = 0; i < length; i++){
    const randomValue = Math.floor(Math.random() * password.length);
    strongPass += password[randomValue];
  };
  passwordDisplay.innerText = strongPass;
  copyButton.disabled = false;
});

copyButton.addEventListener("click", function () {
  const password = passwordDisplay.textContent;
  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    }).catch((err) => {
      alert("Failed to copy password: " + err);
    });
  }
});

