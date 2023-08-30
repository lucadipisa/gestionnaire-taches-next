import { createTask } from './taskUseCases';
import Task from '../models/Task';

// Mock de la fonction fetch
global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ id: 'test-id', title: 'Test Task', completed: false }),
  });


describe('createTask', () => {
  it('crée une nouvelle tâche avec le titre spécifié', async () => {
    const newTaskTitle = 'Nouvelle tâche de test';
    const newTask: Task = await createTask(newTaskTitle);
    expect(newTask.title).toBe(newTaskTitle);
    expect(newTask.completed).toBe(false);
  });

  it('assigne un ID unique à la nouvelle tâche', async () => {
    const newTask: Task = await createTask('Test Task');
    expect(newTask.id).toBeDefined();
  });
});
