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

    tasks.push({
    text: taskText,
    completed: false
});

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        const taskText = document.createElement("span");

        taskText.textContent = task.text;

        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }

        taskText.addEventListener("click", function() {
            toggleTask(index);
        });

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deleteTask(index);
        });

        li.appendChild(taskText);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });
     taskCount.textContent = tasks.length;
}

    

    
function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}

    li.appendChild(deleteButton);

    taskList.appendChild(li);

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    displayTasks();
}
!tasks[index].completed

   