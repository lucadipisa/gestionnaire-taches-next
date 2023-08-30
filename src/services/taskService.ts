import Task from '../models/Task';

const tasks: Task[] = [];

const taskService = {
  getTasks: async (): Promise<Task[]> => {
    return tasks;
  },

  

  addTask: async (title: string): Promise<Task> => {
    const newTask: Task = {
      id: String(tasks.length + 1),
      title,
      completed: false,
    };
    tasks.push(newTask);
    return newTask;
  },

  toggleTaskCompletion: async (taskId: string): Promise<void> => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  },

  deleteTask: async (taskId: string): Promise<void> => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
    }
  },
};

export default taskService;
