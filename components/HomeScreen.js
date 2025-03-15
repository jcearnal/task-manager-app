import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import Task from './Task';
import taskData from './taskData';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(taskData);

  console.log("Initial Task List:", tasks.map(task => `${task.title} (Completed: ${task.completed})`));

  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      console.log("Updated Task List:", updatedTasks.map(task => `${task.title} (Completed: ${task.completed})`));
      return updatedTasks;
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.taskListContainer}>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            toggleCompletion={toggleTaskCompletion} 
            onPress={() => {
              console.log(`Opening Task Details for: ${task.title}`);
              navigation.navigate('TaskDetails', { task });
            }} 
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  taskListContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
