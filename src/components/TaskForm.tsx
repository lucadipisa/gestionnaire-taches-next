import React, { useState } from 'react';
import styles from './TaskForm.module.css'; // Import des styles locaux

interface TaskFormProps {
  onSubmit: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title);
      setTitle('');
    }
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une tâche..."
        className={styles.inputField}
      />
      <button type="submit" className={styles.addButton}>Ajouter</button>
    </form>
  );
};

export default TaskForm;
