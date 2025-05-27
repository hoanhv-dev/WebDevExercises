// ========== Config ==========
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// ========== DOM Elements ==========
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("add-task-button");
const closeTaskFormBtn = document.getElementById("close-taskform-button");
const errorMessage = document.getElementById("error-message");
const filterBtn = document.getElementById("filter-button");
const filterOptions = document.getElementById("filter-options");
const filterSelect = document.getElementById("filter-select");
const applyFilterBtn = document.getElementById("apply-filter-button");
const closeFilterBtn = document.getElementById("close-filter-button");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");
const pageIndicator = document.getElementById("page-indicator");

// ========== State ==========
let currentPage = 1;
const tasksPerPage = 10;
let allTasks = [];
let filteredTasks = [];

// ========== Helpers ==========
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
}

function updatePageIndicator() {
  const maxPage = Math.ceil(filteredTasks.length / tasksPerPage);
  pageIndicator.textContent = `Page ${currentPage} of ${maxPage}`;
}

// ========== Core Functions ==========
async function loadTasks() {
  try {
    clearError();
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    const tasks = await res.json();

    allTasks = tasks;
    filteredTasks = [...allTasks];
    renderTasks();
  } catch (err) {
    showError(err.message);
  }
}

function renderTasks() {
  const start = (currentPage - 1) * tasksPerPage;
  const end = start + tasksPerPage;
  const tasksToRender = filteredTasks.slice(start, end);

  taskList.innerHTML = "";
  tasksToRender.forEach(renderTask);
  updatePageIndicator();
}

function renderTask(task) {
  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-white p-3 rounded shadow";
  li.dataset.id = task.id;

  li.innerHTML = `
    <input type="checkbox" class="mr-2" ${task.completed ? "checked" : ""}>
    <span class="flex-1">${task.title}</span>
    <button class="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
  `;

  li.querySelector("input").addEventListener("change", (e) => {
    updateTask(task.id, e.target.checked);
  });

  li.querySelector("button").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
    }
  });

  taskList.appendChild(li);
}

function addTask(title) {
  const newTask = {
    id: Date.now(), // Local ID only
    title,
    completed: false
  };

  allTasks.unshift(newTask);
  filteredTasks = [...allTasks];
  currentPage = 1;
  renderTasks();
}

function updateTask(id, completed) {
  const task = allTasks.find(t => t.id === id);
  if (task) {
    task.completed = completed;
    renderTasks();
  }
}

function deleteTask(id) {
  allTasks = allTasks.filter(t => t.id !== id);
  filteredTasks = [...allTasks];

  // Fix pagination overflow
  const maxPage = Math.ceil(filteredTasks.length / tasksPerPage);
  if (currentPage > maxPage) currentPage = maxPage;

  renderTasks();
}

// ========== Filter ==========
function applyFilter(value) {
  switch (value) {
    case "completed":
      filteredTasks = allTasks.filter(t => t.completed);
      break;
    case "not-completed":
      filteredTasks = allTasks.filter(t => !t.completed);
      break;
    default:
      filteredTasks = [...allTasks];
  }

  currentPage = 1;
  renderTasks();
}

// ========== Task Action Register ==========
function registerTaskActions() {
  addTaskBtn.addEventListener("click", () => {
    taskForm.classList.remove("hidden");
    taskInput.focus();
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = taskInput.value.trim();

    if (!title) return showError("Task name cannot be empty");
    if (/^\d+$/.test(title)) return showError("Please enter a valid task name");

    clearError();
    addTask(title);
    taskInput.value = "";
    taskForm.classList.add("hidden");
  });

  closeTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.add("hidden");
  });
}

// ========= Filter Action Register ==========
function registerFilterActions() {
  filterBtn.addEventListener("click", () => {
    filterOptions.classList.toggle("hidden");
  });

  applyFilterBtn.addEventListener("click", () => {
    applyFilter(filterSelect.value);
    filterOptions.classList.add("hidden");
  });

  closeFilterBtn.addEventListener("click", () => {
    filterOptions.classList.add("hidden");
  });
}

// ========== Pagination Button Register ==========
function registerPaginationButtons() {
  nextBtn.addEventListener("click", () => {
    const maxPage = Math.ceil(filteredTasks.length / tasksPerPage);
    if (currentPage < maxPage) {
      currentPage++;
      renderTasks();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderTasks();
    }
  });
}

// ========== Event Listeners ==========
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  registerTaskActions();
  registerFilterActions();
  registerPaginationButtons();
});
