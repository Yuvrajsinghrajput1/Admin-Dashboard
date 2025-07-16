let completedCount = 0;
let uncompletedCount = 0;

function showSection(id){
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function toggleTheme(){
   document.body.classList.toggle('dark-mode');
   document.body.classList.toggle('light-mode');
}

function logout(){
    alert("Logging out...");
}

function updateTaskCount(){
    document.getElementById("task-count").textContent =`Completed: ${completedCount} | ${uncompletedCount}`;
}

function addTask(){
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if(taskText === "") return;

    const taskDiv = document.createElement("div");
    taskDiv.textContent = taskText;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const newText = prompt("Edit task:", taskDiv.firstChild.textContent);
        if(newTask) taskDiv.firstChild.textContent = newTask;
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
    taskDiv.remove();
    completedCount--;
    updateTaskCount();
};

    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(delBtn);

    document.getElementById("completedTasks").appendChild(taskDiv);
    completedCount++;
    updateTaskCount();
    input.value = "";
}
