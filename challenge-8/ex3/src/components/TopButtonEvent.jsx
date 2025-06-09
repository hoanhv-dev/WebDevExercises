import { useState } from "react";
import TopButton from "./TopButton";
import TaskForm from "./TaskForm";
import FilterOption from "./FilterOption";
import TaskList from "./TaskList";

const TopButtonEvent = ({
  tasks,
  allTasks,
  setTasks,
  onAddTask,
  setFilter,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  // Tasks
  const onDelete = (id) => {
    const updated = allTasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  const onToggle = (id) => {
    const updated = allTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  // Handle display Form
  const handleOpenForm = () => {
    setShowForm(true);
    setShowFilter(false);
  };

  const handleOpenFilter = () => {
    setShowFilter(true);
    setShowForm(false);
  };

  const handleCloseAll = () => {
    setShowForm(false);
    setShowFilter(false);
  };

  return (
    <div className="p-2">
      <TopButton onAddClick={handleOpenForm} onFilterClick={handleOpenFilter} />
      {showForm && <TaskForm onAddTask={onAddTask} onClose={handleCloseAll} />}
      {showFilter && (
        <FilterOption
          tasks={tasks}
          onClose={() => setShowFilter(false)}
          onFilterChange={(value) => setFilter(value)}
        />
      )}
      <TaskList tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
};

export default TopButtonEvent;
