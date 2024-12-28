const habitForm = document.getElementById("habit-form");
const habitsContainer = document.getElementById("habits-container");

let habits = [];

habitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const habitName = document.getElementById("habit-name").value.trim();

  // Validate input
  if (!habitName) {
    alert("Please enter a habit name.");
    return;
  }

  // Check for duplicates
  if (habits.some((habit) => habit.name === habitName)) {
    alert("This habit already exists.");
    return;
  }

  const habit = {
    name: habitName,
    days: Array(7).fill(false),
  };

  habits.push(habit);
  document.getElementById("habit-name").value = "";
  renderHabits();
});

function renderHabits() {
  habitsContainer.innerHTML = "";
  if (habits.length === 0) {
    habitsContainer.textContent = "No habits yet! Add one above.";
    return;
  }

  habits.forEach((habit, index) => {
    const habitDiv = document.createElement("div");
    habitDiv.classList.add("habit");

    const habitName = document.createElement("span");
    habitName.classList.add("habit-name");
    habitName.textContent = habit.name;

    const habitDays = document.createElement("div");
    habitDays.classList.add("habit-days");

    habit.days.forEach((day, dayIndex) => {
      const dayCircle = document.createElement("div");
      dayCircle.classList.add("day-circle");
      dayCircle.textContent = dayIndex + 1;
      if (day) dayCircle.classList.add("completed");

      dayCircle.addEventListener("click", () => {
        habit.days[dayIndex] = !habit.days[dayIndex];
        renderHabits();
      });

      habitDays.appendChild(dayCircle);
    });

    habitDiv.appendChild(habitName);
    habitDiv.appendChild(habitDays);
    habitsContainer.appendChild(habitDiv);
  });
}
