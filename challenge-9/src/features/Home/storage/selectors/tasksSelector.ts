import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '@storage/store';

// Base selectors
const selectTasksState = (state: AppState) => state.tasks;

// Memoized selectors

export const selectFilteredTasks = createSelector(
  [selectTasksState],
  (tasksState) => tasksState.filteredTasks
);

export const selectPagination = createSelector(
  [selectTasksState],
  (tasksState) => tasksState.pagination
);

export const selectCurrentPage = createSelector(
  [selectPagination],
  (pagination) => pagination.currentPage
);

export const selectItemsPerPage = createSelector(
  [selectPagination],
  (pagination) => pagination.itemsPerPage
);

export const selectTotalPages = createSelector(
  [selectFilteredTasks, selectItemsPerPage],
  (filteredTasks, itemsPerPage) => {
    return Math.ceil(filteredTasks.length / itemsPerPage);
  }
);

export const selectPaginatedTasks = createSelector(
  [selectFilteredTasks, selectCurrentPage, selectItemsPerPage],
  (filteredTasks, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTasks.slice(startIndex, startIndex + itemsPerPage);
  }
);