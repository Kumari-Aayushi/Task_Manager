function renderTasks(tasks) {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item" + (task.completed ? " completed" : "");

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            <span>${task.text}</span>
            <button>Delete</button>
        `;

        li.querySelector("input").onclick = () => toggleTask(task.id);
        li.querySelector("button").onclick = () => deleteTask(task.id);

        list.appendChild(li);
    });

    updateStats();
}
