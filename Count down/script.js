const form = document.getElementById("countdown-form");
const countdownDisplay = document.getElementById("countdown-display");
const eventTitle = document.getElementById("event-title");
const timeRemaining = document.getElementById("time-remaining");

let countdownInterval;

// Load data from local storage on page load

document.addEventListener("DOMContentLoaded", () => {
  const savedEventName = localStorage.getItem("eventName");
  const savedEventDate = localStorage.getItem("eventDate");

  if (savedEventName && savedEventDate) {
    const eventDate = new Date(savedEventDate);

    // Check if the saved date is still in the future
    if (eventDate > new Date()) {
      startCountdown(savedEventName, eventDate);
    } else {
      localStorage.clear(); // Clear outdated data
    }
  }
});

// Save data and start countdown on form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const eventName = document.getElementById("event-name").value.trim();
  const eventDate = new Date(document.getElementById("event-date").value);

  if (!eventName || isNaN(eventDate.getTime())) {
    alert("Please enter a valid event name and date.");
    return;
  }

  // Save to local storage
  localStorage.setItem("eventName", eventName);
  localStorage.setItem("eventDate", eventDate.toISOString());

  startCountdown(eventName, eventDate);
});

function startCountdown(eventName, eventDate) {
  clearInterval(countdownInterval);

  eventTitle.textContent = eventName;
  countdownDisplay.classList.remove("hidden");

  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDiff = eventDate - now;

    if (timeDiff <= 0) {
      clearInterval(countdownInterval);
      timeRemaining.textContent = "The event has started!";
      localStorage.clear(); // Clear outdated data
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    timeRemaining.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
};