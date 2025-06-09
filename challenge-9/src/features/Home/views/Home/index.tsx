import TasksList from '@features/Home/components/TasksList';
import { useGetPostsQuery } from '@features/Home/services';
import LoadingIndicator from '@shared/components/LoadingIndicator';
import { TasksType } from '@features/Home/types/task';
import TaskForm from '@features/Home/components/TaskForm/TaskForm';
import FilterForm from '@features/Home/components/FilterForm/FilterForm';
import Header from '@features/Home/components/Header/Header';
import SideBar from '@features/Home/components/SideBar/SideBar';
import { useEffect, useState } from 'react';
import './style.scss';

// Constants
const ITEMS_PER_PAGE = 10;

const Home = () => {
  // API and Data States
  const { data, isLoading } = useGetPostsQuery();
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TasksType[]>([]);

  // UI States
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize data from API
  useEffect(() => {
    if (data) {
      setTasks(data);
      setFilteredTasks(data);
    }
  }, [data]);

  // Helper Functions
  const updatePagination = (newFilteredTasks: TasksType[]) => {
    const newTotalPages = Math.ceil(newFilteredTasks.length / ITEMS_PER_PAGE);
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages || 1);
    }
    return newFilteredTasks;
  };

  const filterTasksByCompletion = (taskList: TasksType[], completed: boolean | null) => {
    return completed === null
      ? taskList
      : taskList.filter((task) => task.completed === completed);
  };

  const shouldAddToFilteredTasks = (currentFilteredTasks: TasksType[], newTask: TasksType) => {
    // Show all tasks
    if (currentFilteredTasks.length === tasks.length) {
      return true;
    }
    // Show only completed tasks
    if (currentFilteredTasks.every((t) => t.completed)) {
      return newTask.completed;
    }
    // Show only not completed tasks
    return !newTask.completed;
  };

  // Task Management Functions
  const handleTaskToggle = (id: number) => {
    const updateTaskCompletion = (taskList: TasksType[]) =>
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

    setTasks(updateTaskCompletion);
    setFilteredTasks((currentFilteredTasks) => 
      updatePagination(updateTaskCompletion(currentFilteredTasks))
    );
  };

  const handleTaskDelete = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
    setFilteredTasks((currentFilteredTasks) => {
      const newFilteredTasks = currentFilteredTasks.filter((task) => task.id !== id);
      return updatePagination(newFilteredTasks);
    });
  };

  const handleAddTask = (newTask: Omit<TasksType, 'id'>) => {
    const task: TasksType = {
      ...newTask,
      id: Math.max(0, ...tasks.map((t) => t.id)) + 1,
    };

    // Update main tasks list
    setTasks((tasks) => [...tasks, task]);

    // Update filtered tasks and pagination
    setFilteredTasks((currentFilteredTasks) => {
      const newFilteredTasks = shouldAddToFilteredTasks(currentFilteredTasks, task)
        ? [...currentFilteredTasks, task]
        : currentFilteredTasks;
      
      return updatePagination(newFilteredTasks);
    });
  };

  // Filter Management
  const handleApplyFilter = (filters: { completed: boolean | null }) => {
    const newFilteredTasks = filterTasksByCompletion(tasks, filters.completed);
    setFilteredTasks(newFilteredTasks);
    setCurrentPage(1);
  };

  // UI Handlers
  const handleOpenForm = () => {
    setShowForm(true);
    setShowFilter(false);
  };

  const handleOpenFilter = () => {
    setShowForm(false);
    setShowFilter(true);
  };

  // Pagination Calculations
  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTasks = filteredTasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className='HomeContainer min-h-screen bg-yellow-50'>
      <Header />
      <SideBar />
      <TasksList
        tasks={currentTasks}
        onToggle={handleTaskToggle}
        onDelete={handleTaskDelete}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onAddClick={handleOpenForm}
        onFilterClick={handleOpenFilter}
      />
      {showForm && <TaskForm onSubmit={handleAddTask} onClose={() => setShowForm(false)} />}
      {showFilter && <FilterForm onApply={handleApplyFilter} onClose={() => setShowFilter(false)} />}
    </div>
  );
};

export default Home;
