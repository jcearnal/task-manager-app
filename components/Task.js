import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import styles from '../styles/TaskStyles'; // Import external styles

// Task category images
const taskImages = {
  Home: require('../assets/task1.png'),
  Work: require('../assets/task2.png'),
  Personal: require('../assets/task3.png'),
};

const Task = ({ task, toggleCompletion, deleteTask, onPress }) => {
  // Swipe-to-delete functionality
  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteContainer} onPress={() => deleteTask(task.id)}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress} style={styles.taskContainer}>
        {/* Task category icon */}
        <Image source={taskImages[task.category] || taskImages.Home} style={styles.taskIcon} />
        
        <View style={styles.textContainer}>
          <Text style={[styles.taskTitle, task.completed && styles.completedText]}>
            {task.title}
          </Text>
          <Text style={styles.taskDescription}>{task.description}</Text>
          {task.date && (
            <Text style={styles.taskDate}>
               {String(task.date)}
            </Text>
          )}
        </View>

        {/* Toggle completion button */}
        <TouchableOpacity onPress={() => toggleCompletion(task.id)} style={styles.completeButton}>
          <Text style={styles.buttonText}>{task.completed ? 'Undo' : 'Complete'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default Task;
