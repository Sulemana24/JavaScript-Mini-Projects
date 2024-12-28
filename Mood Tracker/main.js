const moodForm = document.getElementById("mood-form");
const timeline = document.getElementById("timeline");

moodForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const mood = document.getElementById('mood').value;
  const note = document.getElementById('note').value;

  if(!mood) {
    alert('Please select a mood.');
    return;
  }
  const entry = document.createElement('li');
  const date = new Date().toLocaleString();
  entry.innerHTML = `
  <span>${mood}</span> (${date})
  <p>${note ? note : ''}</p>`;
  timeline.prepend(entry);
  moodForm.reset();
});