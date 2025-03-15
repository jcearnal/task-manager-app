import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Task from './Task';
import taskData from './taskData';

const TaskList = ({ navigation }) => {
  const [tasks, setTasks] = useState(taskData);

  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          onPress={() => navigation.navigate('Task Details', { task })}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
});

export default TaskList;
