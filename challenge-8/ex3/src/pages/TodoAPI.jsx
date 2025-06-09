import MainLayout from "../layouts/MainLayout";
import Pagination from "../components/Pagination";
import TopButtonEvent from "../components/TopButtonEvent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import request from "../shared/utils/request";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;
  const navigate = useNavigate();

  // ========== TASK LOGIC ========== //

  const validateTodoList = (taskList) => {
    return (
      Array.isArray(taskList) &&
      taskList.every(
        (task) =>
          task && typeof task === "object" && "id" in task && "title" in task
      )
    );
  };

  const onSetTasks = (tasks) => {
    setTasks(tasks);
    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
  };

  const onLoadTodoList = async () => {
    let tasks = [];
    try {
      const response = await request.get("todos");
      const apiTasks = response.data;
      const isValidTasks = validateTodoList(apiTasks);
      if (!isValidTasks) {
        console.warn("Invalid tasks format from API.");
        return;
      }

      tasks = apiTasks;
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      onSetTasks(tasks);
    }
  };

  // Load tasks and username
  useEffect(() => {
    const storedUsername = JSON.parse(localStorage.getItem("username"));
    if (!storedUsername) {
      navigate("/");
      return;
    }

    setUsername(storedUsername);

    // Fetch tasks from API
    onLoadTodoList();
  }, []);

  useEffect(() => {
    if (!username) {
      return;
    }

    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
  }, [tasks, username]);

  // ============================================================================ //

  // ========== FILTER ========== //
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "complete") {
      return task.completed;
    }
    if (filter === "not-complete") {
      return !task.completed;
    }
    return true;
  });

  // Re-render after apply filter
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // ============================================================================ //

  // ========== PAGINATION LOGIC ========== //
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const currentTasks = filteredTasks.slice(
    startIndex,
    startIndex + tasksPerPage
  );

  const handleAddTask = (newTask) => {
    const updatedTasks = [...filteredTasks, newTask];
    setTasks(updatedTasks);
    setCurrentPage(Math.ceil(updatedTasks.length / tasksPerPage)); // Move to last page
  };

  // ============================================================================ //

  return (
    <MainLayout>
      <TopButtonEvent
        tasks={currentTasks}
        allTasks={tasks}
        setTasks={setTasks}
        onAddTask={handleAddTask}
        setFilter={setFilter}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </MainLayout>
  );
};

export default Todo;
