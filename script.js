const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = [];

addTaskBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskText);

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

    const li = document.createElement("li");

    li.textContent = task;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        deleteTask(index);
    });

    
    function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}

    li.appendChild(deleteButton);

    taskList.appendChild(li);

});

    taskCount.textContent = tasks.length;
}