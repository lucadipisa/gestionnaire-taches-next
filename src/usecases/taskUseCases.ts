import Task from '../models/Task';
import taskService from '../services/taskService';

export const fetchTasks = async (): Promise<Task[]> => {
  return taskService.getTasks();
};

export const createTask = async (title: string): Promise<Task> => {
  const newTask = await taskService.addTask(title);
  return newTask;
};

export const deleteTask = async (taskId: string): Promise<void> => {
  await taskService.deleteTask(taskId);}

  export const toggleTaskCompletion = async (taskId: string): Promise<void> => {
    await taskService.toggleTaskCompletion(taskId);
};

