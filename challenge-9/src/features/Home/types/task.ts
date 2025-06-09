// Basic task type
export type TasksType = {
  id: number;
  title: string;
  completed: boolean;
};

// Props for the tasks list
export type TasksListProps = {
  tasks: TasksType[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onAddClick: () => void;
  onFilterClick: () => void;
};

// Props for forms
export type CloseForm = {
  onClose: () => void;
};
