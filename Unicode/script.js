function detectChar() {
  const input = document.getElementById("inputType").value.trim(); // Trim to remove extra spaces

  if (input) {
    const unicodeValue = input.charCodeAt(0);
    const result = `The Unicode Value of "${input}" is ${unicodeValue}`;
    document.getElementById('result').textContent = result;
  } else {
    document.getElementById('result').textContent = 'Please Enter a Character';
  }
}
