import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const taskImages = {
  1: require('../assets/task1.png'),
  2: require('../assets/task2.png'),
  3: require('../assets/task3.png'),
};

const Task = ({ task, toggleCompletion, onPress }) => {
  console.log(`Rendering Task: ${task.title} (Completed: ${task.completed})`);

  return (
    <TouchableOpacity 
      onPress={() => {
        console.log(`Navigating to Task Details: ${task.title}`);
        onPress();
      }} 
      style={styles.taskContainer}
    >
      <Image source={taskImages[task.id]} style={[styles.taskIcon, { tintColor: 'white' }]} />
      <View style={styles.textContainer}>
        <Text style={[styles.taskTitle, task.completed && styles.completedText]}>
          {task.title}
        </Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
      </View>
      <TouchableOpacity 
        onPress={() => {
          console.log(`Toggling Completion: ${task.title} (New State: ${!task.completed})`);
          toggleCompletion(task.id);
        }} 
        style={styles.completeButton}
      >
        <Text style={styles.buttonText}>{task.completed ? 'Undo' : 'Complete'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  taskIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: 'white', // Makes icons white
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  taskDescription: {
    fontSize: 14,
    color: '#ccc',
  },
  completeButton: {
    backgroundColor: '#03dac6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Task;
