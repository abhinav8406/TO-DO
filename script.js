const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("addBtn").click();
    }
});
function addTask() {
    const taskText = taskInput.value.trim().toUpperCase();
    if (taskText === "") return;
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = taskText;
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
    taskInput.value = "";
}