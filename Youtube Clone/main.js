const menuBtn = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeBtn = document.querySelector(".theme-button i");

if(localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeBtn.classList.replace("ri-moon-fill", "ri-sun-fill");
} else{
  themeBtn.classList.replace("ri-sun-fill", "ri-moon-fill");
}

themeBtn.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeBtn.classList.toggle("ri-sun-fill", isDarkMode);
  themeBtn.classList.toggle("ri-moon-fill", !isDarkMode);
})

menuBtn.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});
});

screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});

if(window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden")
}