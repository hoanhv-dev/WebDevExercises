// API URL
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// DOM elements
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

let currentPage = 1;
const tasksPerPage = 10;
let filteredTasksList = [];

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
}

// Fetch and render tasks
async function fetchTasks(page = 1) {
  try {
    clearError();
    const res = await fetch(`${API_URL}?_limit=${tasksPerPage}&_page=${page}`);
    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const tasks = await res.json();
    taskList.innerHTML = "";
    tasks.forEach(renderTask);

    updatePageIndicator();
  } catch (err) {
    showError(err.message);
  }
}

// Render a single task
function renderTask(task) {
  // Create the list item and set attributes
  const li = document.createElement("li");
  li.className =
    "flex items-center justify-between bg-white p-3 rounded shadow";
  li.dataset.id = task.id;

  // Create HTML string for the task content
  const newEl = `
    <input type="checkbox" class="mr-2" ${task.completed ? "checked" : ""}>
    <span class="flex-1">${task.title}</span>
    <button class="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
  `;

  // Insert the HTML string into the li
  li.innerHTML = newEl;

  // Get references to the checkbox and delete button
  const checkbox = li.querySelector("input[type='checkbox']");
  const deleteBtn = li.querySelector("button");

  // Add event listeners
  checkbox.addEventListener("change", () => {
    updateTask(task.id, checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id, li);
    }
  });

  // Append the list item to the task list
  taskList.appendChild(li);
}

// Render filtered task
function renderFilteredTasks() {
  const start = (currentPage - 1) * tasksPerPage;
  const end = tasksPerPage + start;
  const tasksToShow = filteredTasksList.slice(start, end);

  taskList.innerHTML = "";
  tasksToShow.forEach(renderTask);

  updatePageIndicator();
}

// Base Fetch function to add a action
async function baseFetch(url, options = {}, errorMessage = "Request failed") {
  try {
    clearError();
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(errorMessage);
    }
    if (res.status !== 204) {
      return await res.json(); // Avoid parsing empty responses
    }
  } catch (err) {
    showError(err.message);
  }
}

// Add a new task
async function addTask(title) {
  const newTask = await baseFetch(
    API_URL,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false }),
    },
    "Failed to add task"
  );

  renderTask(newTask);
  
}

// Update a task
async function updateTask(id, completed) {
  await baseFetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    },
    "Failed to update task"
  );
}

// Delete a task
async function deleteTask(id, element) {
  await baseFetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    },
    "Failed to delete task"
  );

  element.remove();
}

// Filter options
function filterTasks(filterValue) {
  fetch(API_URL)
    .then((res) => res.json())
    .then((tasks) => {
      if (filterValue === "completed") {
        filteredTasksList = tasks.filter((task) => task.completed);
      } else if (filterValue === "not-completed") {
        filteredTasksList = tasks.filter((task) => !task.completed);
      } else {
        filteredTasksList = tasks;
      }

      currentPage = 1;
      renderFilteredTasks();
    })
    .catch((err) => {
      showError("Failed to load tasks for filtering");
    });
}

// Page indicator
function updatePageIndicator() {
  const indicator = document.getElementById("page-indicator");
  indicator.textContent = `Page ${currentPage}`;
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Add task button
  addTaskBtn.addEventListener("click", () => {
    taskForm.classList.remove("hidden");
    taskInput.focus();
  });

  // Confirm task form submission
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName) {
      addTask(taskName);
      taskInput.value = "";
      taskForm.classList.add("hidden");
    }
  });

  fetchTasks(currentPage); // Load tasks on page load

  // Show filter options
  filterBtn.addEventListener("click", () => {
    filterOptions.classList.toggle("hidden");
  });

  // Apply filter
  applyFilterBtn.addEventListener("click", () => {
    const filterValue = filterSelect.value;
    filterTasks(filterValue);
  });
});

// Close filter
closeFilterBtn.addEventListener("click", () => {
  filterOptions.classList.add("hidden");
});

// Close task for
closeTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.add("hidden");
});

// Next and Previous buttons
nextBtn.addEventListener("click", () => {
  if(currentPage<20){
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
