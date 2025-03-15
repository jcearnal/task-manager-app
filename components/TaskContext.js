import React, { createContext, useState } from 'react';
import taskData from '../components/taskData';

// Manages tasks and provides functions for modifying them
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  console.log("TaskProvider loaded!"); // Verifies TaskProvider initializes

  const [tasks, setTasks] = useState(taskData);

  // Adds a new task to the list
  const addTask = (newTask) => {
    console.log("Adding task:", newTask);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Deletes a task by ID
  const deleteTask = (taskId) => {
    console.log("Deleting task with ID:", taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Toggles completion status of a task
  const toggleTaskCompletion = (taskId) => {
    console.log("Toggling completion for task ID:", taskId);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskCompletion }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
