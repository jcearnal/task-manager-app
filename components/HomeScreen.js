import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import Header from './Header';
import Task from './Task';
import { TaskContext } from './TaskContext'; 
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task 
            task={item} 
            toggleCompletion={(taskId) => {
              console.log("Toggling task completion for ID:", taskId);
              toggleTaskCompletion(taskId);
            }} 
            deleteTask={(taskId) => {
              console.log("Deleting task with ID:", taskId);
              deleteTask(taskId);
            }}
            onPress={() => {
              console.log("Navigating to Task Details for:", item.title);
              navigation.navigate('TaskDetails', { task: item });
            }}
          />
        )}
        contentContainerStyle={styles.taskListContainer}
      />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
