// ========== HTML Elements ==========
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const errorMessage = document.getElementById("error-message");
const addTaskBtn = document.getElementById("add-task-button");
const filterBtn = document.getElementById("filter-button");
const filterOptions = document.getElementById("filter-options");
const filterSelect = document.getElementById("filter-select");
const applyFilterBtn = document.getElementById("apply-filter-button");
const closeFilterBtn = document.getElementById("close-filter-button");
const closeTaskFormBtn = document.getElementById("close-taskform-button");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");

// ========== State ==========
let currentPage = 1;
const tasksPerPage = 10;
let filteredTasksList = [];

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
  const indicator = document.getElementById("page-indicator");
  indicator.textContent = `Page ${currentPage}`;
}

// ========== Local Storage Helpers ==========
function getLocalTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function setLocalTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function generateTaskId() {
  return Date.now();
}

// ========== Core Functions ==========
// Fetch tasks from local storage and render them
function fetchTasks(page = 1) {
  clearError();
  const tasks = getLocalTasks();
  const start = (page - 1) * tasksPerPage;
  const paginatedTasks = tasks.slice(start, start + tasksPerPage);

  taskList.innerHTML = "";
  paginatedTasks.forEach(renderTask);

  updatePageIndicator();
}

// Render a single task
function renderTask(task) {
  const li = document.createElement("li");
  li.className =
    "flex items-center justify-between bg-white p-3 rounded shadow";
  li.dataset.id = task.id;

  li.innerHTML = `
    <input type="checkbox" class="mr-2" ${task.completed ? "checked" : ""}>
    <span class="flex-1">${task.title}</span>
    <button class="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
  `;

  const checkbox = li.querySelector("input[type='checkbox']");
  const deleteBtn = li.querySelector("button");

  checkbox.addEventListener("change", () => {
    updateTask(task.id, checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
    }
  });

  taskList.appendChild(li);
}

// ========== Filter Functions ==========
// Render filtered task
function renderFilteredTasks() {
  const start = (currentPage - 1) * tasksPerPage;
  const tasksToShow = filteredTasksList.slice(start, start + tasksPerPage);

  taskList.innerHTML = "";
  tasksToShow.forEach(renderTask);

  updatePageIndicator();
}

// Filter options
function filterTasks(filterValue) {
  const tasks = getLocalTasks();
  if (filterValue === "completed") {
    filteredTasksList = tasks.filter((task) => task.completed);
  } else if (filterValue === "not-completed") {
    filteredTasksList = tasks.filter((task) => !task.completed);
  } else {
    filteredTasksList = tasks;
  }

  currentPage = 1;
  renderFilteredTasks();
}

// ========== Task Management Functions ==========
// Add a new task
function addTask(title) {
  const tasks = getLocalTasks();
  const newTask = { id: generateTaskId(), title, completed: false };
  tasks.push(newTask);
  setLocalTasks(tasks);

  fetchTasks(currentPage);
}

// Update a task
function updateTask(id, completed) {
  const tasks = getLocalTasks();
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, completed } : task
  );
  setLocalTasks(updatedTasks);
  fetchTasks(currentPage);
}

// Delete a task
function deleteTask(id) {
  let tasks = getLocalTasks();
  tasks = tasks.filter((task) => task.id !== id);
  setLocalTasks(tasks);
  fetchTasks(currentPage);
}

// ========== Register Actions ==========
// Register filter actions
function registerFilterActions() {
  // Show filter options
  filterBtn.addEventListener("click", () => {
    filterOptions.classList.toggle("hidden");
  });

  // Apply filter
  applyFilterBtn.addEventListener("click", () => {
    const filterValue = filterSelect.value;
    filterTasks(filterValue);
  });

  // Close filter
  closeFilterBtn.addEventListener("click", () => {
    filterOptions.classList.add("hidden");
  });
}

// Register task actions
function registerTaskActions() {
  // Show task form
  addTaskBtn.addEventListener("click", () => {
    taskForm.classList.remove("hidden");
    taskInput.focus();
  });

  // Confirm task form submission
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = taskInput.value.trim();

    // Validate task title
    if (!title) {
      return showError("Task name cannot be empty");
    }
    if (/^\d+$/.test(title)) {
      return showError("Please enter a valid task name");
    }

    clearError();
    addTask(title);
    taskInput.value = "";
    taskForm.classList.add("hidden");
  });

  // Close task form
  closeTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.add("hidden");
  });
}

// Register Pagination Actions
function registerPaginationActions() {
  nextBtn.addEventListener("click", () => {
    const maxPage = Math.ceil(
      (filteredTasksList.length > 0
        ? filteredTasksList.length
        : getLocalTasks().length) / tasksPerPage
    );
    if (currentPage < maxPage) {
      currentPage++;
      filteredTasksList.length > 0
        ? renderFilteredTasks()
        : fetchTasks(currentPage);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      filteredTasksList.length > 0
        ? renderFilteredTasks()
        : fetchTasks(currentPage);
    }
  });
}

// ========== Event Listeners ==========
document.addEventListener("DOMContentLoaded", function () {
  // Next and Previous buttons
  registerPaginationActions();
  // Task actions
  registerTaskActions();
  // Filter actions
  registerFilterActions();
  // Initial fetch of tasks
  fetchTasks(currentPage);
});
