import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TasksType } from '../types/task';
import homeQuery from '@features/Home/services';
import { ITEMS_PER_PAGE } from '@shared/constants/ItemsPerPage';

type TasksState = {
  tasks: TasksType[];
  filteredTasks: TasksType[];
  filter: {
    completed: boolean | null;
  };
  pagination: {
    data: TasksType[];
    currentPage: number;
    itemsPerPage: number;
  };
};

const initialState: TasksState = {
  tasks: [],
  filteredTasks: [],
  filter: {
    completed: null,
  },
  pagination: {
    data: [],
    currentPage: 1,
    itemsPerPage: ITEMS_PER_PAGE,
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    statusUpdate(state, action: PayloadAction<TasksType>) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
      state.filteredTasks = state.filteredTasks.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
    },
    deleteTask(state, action: PayloadAction<TasksType>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      state.filteredTasks = state.filteredTasks.filter((task) => task.id !== action.payload.id);
    },
    addTask(state, action: PayloadAction<TasksType>) {
      state.tasks.unshift(action.payload);
      
      if (state.filter.completed === null || action.payload.completed === state.filter.completed) {
        state.filteredTasks.unshift(action.payload);
      }

      state.pagination.currentPage = 1;
    },
    applyFilter(state, action: PayloadAction<{ completed: boolean | null }>) {
      state.filter.completed = action.payload.completed;
      state.filteredTasks =
        action.payload.completed === null ? state.tasks : state.tasks.filter((task) => task.completed === action.payload.completed);
      state.pagination.currentPage = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.pagination.currentPage = action.payload;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.pagination.itemsPerPage = action.payload;
      state.pagination.currentPage = 1;
    }
  },

  extraReducers: (builder) => {
    builder.addMatcher(homeQuery.endpoints.getPosts.matchFulfilled, (state, action) => {
      state.tasks = action.payload;
      state.filteredTasks = action.payload;
      state.pagination.data = action.payload;
      state.pagination.currentPage = 1;
    });
  }
    
});

export const { 
  statusUpdate, 
  deleteTask, 
  addTask, 
  applyFilter, 
  setCurrentPage, 
  setItemsPerPage,
} = tasksSlice.actions;
export default tasksSlice.reducer;
