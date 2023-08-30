import React from 'react';
import Task from '../models/Task';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onToggleTaskCompletion: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleTaskCompletion }) => {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTaskCompletion(task.id)}
          />
          <span className={task.completed ? styles.completedText : ''}>{task.title}</span>
          <button onClick={() => onDeleteTask(task.id)} className={styles.deleteButton}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
