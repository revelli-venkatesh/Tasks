// todo.js
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.style.cssText = "background:#e3f2fd; margin:0.4rem 0; padding:0.6rem; border-radius:8px; display:flex; justify-content:space-between; align-items:center;";
    li.textContent = taskInput.value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.cssText = "margin-left:1rem; background:#ef5350; color:white; border:none;";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
