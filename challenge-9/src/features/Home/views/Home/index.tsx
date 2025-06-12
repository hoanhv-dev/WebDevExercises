import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetPostsQuery } from '@features/Home/services';

// Slices
import {
  deleteTask,
  statusUpdate,
} from '@features/Home/storage/slices/tasksSlice';

// Components
import Header from '@features/Home/components/Header/Header';
import SideBar from '@features/Home/components/SideBar/SideBar';
import TasksList from '@features/Home/components/TasksList';
import TaskForm from '@features/Home/components/TaskForm/TaskForm';
import FilterForm from '@features/Home/components/FilterForm/FilterForm';

const Home = () => {
  const dispatch = useDispatch();
  
  // API
  useGetPostsQuery();

  // UI States
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  // UI Handlers
  const handleOpenForm = () => {
    setShowForm(true);
    setShowFilter(false);
  };
  const handleOpenFilter = () => {
    setShowForm(false);
    setShowFilter(true);
  };

  return (
    <div className='HomeContainer min-h-screen bg-yellow-50'>
      <Header />
      <SideBar />
      <TasksList
        onStatusUpdate={(task) => dispatch(statusUpdate(task))}
        onDelete={(task) => dispatch(deleteTask(task))}
        onAddClick={handleOpenForm}
        onFilterClick={handleOpenFilter}
      />
      {showForm && <TaskForm onClose={() => setShowForm(false)} />}
      {showFilter && <FilterForm onClose={() => setShowFilter(false)} completed='all' />}
    </div>
  );
};

export default Home;
