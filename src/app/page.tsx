"use client"
import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { fetchTasks, createTask, deleteTask, toggleTaskCompletion } from '../usecases/taskUseCases';
import Task from '../models/Task';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then((fetchedTasks) => setTasks(fetchedTasks));
  }, []);

  const handleAddTask = async (title: string) => {
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = async (taskId: string) => {
    await deleteTask(taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleTaskCompletion = async (taskId: string) => {
    await toggleTaskCompletion(taskId);
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}>
        <h1>Gestionnaire de tâches</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.formContainer}>
          <h2>Ajouter une tâche</h2>
          <TaskForm onSubmit={handleAddTask} />
        </div>
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleTaskCompletion={handleToggleTaskCompletion}
        />
      </div>
    </div>
  );
};

export default HomePage;
