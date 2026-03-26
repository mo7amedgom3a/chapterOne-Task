// state/useTasks.ts — all app state lives here
import { useState } from 'react';
import { Task } from '../types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showAddSheet, setShowAddSheet] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [editTarget, setEditTarget] = useState<string | null>(null);

  // Derived state
  const pendingTasks = tasks.filter((t) => !t.isComplete);
  const completedTasks = tasks.filter((t) => t.isComplete);
  const allComplete = tasks.length > 0 && completedTasks.length === tasks.length;
  const progress = tasks.length ? completedTasks.length / tasks.length : 0;

  // Actions
  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      isComplete: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isComplete: !t.isComplete } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setDeleteTarget(null);
  };

  const editTask = (id: string, newText: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText.trim() } : t))
    );
    setEditTarget(null);
  };

  const requestDelete = (id: string) => setDeleteTarget(id);
  const cancelDelete = () => setDeleteTarget(null);

  return {
    tasks,
    pendingTasks,
    completedTasks,
    allComplete,
    progress,
    showAddSheet,
    setShowAddSheet,
    deleteTarget,
    addTask,
    toggleComplete,
    requestDelete,
    deleteTask,
    cancelDelete,
    editTarget,
    setEditTarget,
    editTask,
  };
}
