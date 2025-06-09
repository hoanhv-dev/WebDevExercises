import TasksList from '@features/Home/components/TasksList';
import { useGetPostsQuery } from '@features/Home/services';
import LoadingIndicator from '@shared/components/LoadingIndicator';
import { TasksType } from '@features/Home/types/task';
import TaskForm from '@features/Home/components/TaskForm/TaskForm';
import FilterForm from '@features/Home/components/FilterForm/FilterForm';

import './style.scss';
import Header from '@features/Home/components/Header/Header';
import SideBar from '@features/Home/components/SideBar/SideBar';
import { useEffect, useState } from 'react';

const Home = () => {
  const { data, isLoading } = useGetPostsQuery();
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TasksType[]>([]);
  const ITEMS_PER_PAGE = 10;
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data) {
      setTasks(data);
      setFilteredTasks(data);
    }
  }, [data]);

  const onToggle = (id: number) => {
    setTasks((tasks) => tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    setFilteredTasks((tasks) => tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const onDelete = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
    setFilteredTasks((currentFilteredTasks) => {
      const newFilteredTasks = currentFilteredTasks.filter((task) => task.id !== id);
      
      // Calculate new total pages
      const newTotalPages = Math.ceil(newFilteredTasks.length / ITEMS_PER_PAGE);
      
      // If current page is greater than new total pages, move to the last page
      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages || 1);
      }
      
      return newFilteredTasks;
    });
  };

  const handleOpenForm = () => {
    setShowForm(true);
    setShowFilter(false);
  };

  const handleOpenFilter = () => {
    setShowForm(false);
    setShowFilter(true);
  };

  const handleAddTask = (newTask: Omit<TasksType, 'id'>) => {
    const task: TasksType = {
      ...newTask,
      id: Math.max(0, ...tasks.map((t) => t.id)) + 1,
    };
    setTasks((tasks) => [...tasks, task]);
    
    // Only add to filteredTasks if it matches the current filter
    setFilteredTasks((currentFilteredTasks) => {
      // If we're showing all tasks, add the new task
      if (currentFilteredTasks.length === tasks.length) {
        return [...currentFilteredTasks, task];
      }
      
      // If we're showing completed tasks, only add if the new task is completed
      if (currentFilteredTasks.every(t => t.completed)) {
        return task.completed ? [...currentFilteredTasks, task] : currentFilteredTasks;
      }
      
      // If we're showing not completed tasks, only add if the new task is not completed
      if (currentFilteredTasks.every(t => !t.completed)) {
        return !task.completed ? [...currentFilteredTasks, task] : currentFilteredTasks;
      }
      
      return currentFilteredTasks;
    });

    // Update current page based on the new filtered tasks length
    setFilteredTasks((newFilteredTasks) => {
      const newTotalPages = Math.ceil(newFilteredTasks.length / ITEMS_PER_PAGE);
      // If current page is greater than new total pages, set to last page
      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages || 1);
      }
      return newFilteredTasks;
    });
  };

  const handleApplyFilter = (filters: { completed: boolean | null }) => {
    if (filters.completed === null) {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.completed === filters.completed));
    }
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTasks = filteredTasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <div className='HomeContainer min-h-screen bg-yellow-50'>
      <Header />
      <SideBar />
      <TasksList
        tasks={currentTasks}
        onToggle={onToggle}
        onDelete={onDelete}
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
