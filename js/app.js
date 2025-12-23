let tasks = loadTasks();
let currentFilter = "all";

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");

form.addEventListener("submit", e => {
    e.preventDefault();
    addTask(input.value);
    input.value = "";
});

function addTask(text) {
    tasks.push({
        id: Date.now(),
        text: text.trim(),
        completed: false
    });
    saveTasks(tasks);
    applyFilter();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
    applyFilter();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(tasks);
    applyFilter();
}

function applyFilter() {
    let filtered = tasks;

    if (currentFilter === "active")
        filtered = tasks.filter(t => !t.completed);
    if (currentFilter === "completed")
        filtered = tasks.filter(t => t.completed);

    renderTasks(filtered);
}

document.querySelectorAll(".filters button").forEach(btn => {
    btn.onclick = () => {
        currentFilter = btn.dataset.filter;
        applyFilter();
    };
});

document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

applyFilter();
