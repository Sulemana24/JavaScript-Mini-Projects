const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask(){
  if(taskInput.value === ''){
    alert("Add a task please");
  }else{
    let taskItem = document.createElement("li");
    taskItem.innerHTML = taskInput.value;
    taskList.appendChild(taskItem);
    
    let span = document.createElement("span");
    taskItem.appendChild(span);
  }
  taskInput.value = "";
}

taskList.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle ("checked");
    saveData();
  }else if(e. target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
  saveData(); 
});

function saveData(){
  localStorage.setItem("data", taskList.innerHTML);
};

function showTask(){
  taskList.innerHTML = localStorage.getItem("data");
};

showTask();


