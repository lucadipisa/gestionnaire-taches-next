import { createTask } from './taskUseCases';
import Task from '../models/Task';

// Mock de la fonction fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 'test-id', title: 'Test Task', completed: false }),
  })
) as any;

describe('createTask', () => {
  it('crée une nouvelle tâche', async () => {
    const newTask: Task = await createTask('Test Task');
    expect(newTask).toEqual({
      id: 'test-id',
      title: 'Test Task',
      completed: false,
    });
  });
});
