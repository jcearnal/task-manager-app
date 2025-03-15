import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from './Header';
import styles from '../styles/TaskDetailsStyles';

// Task category images
const taskImages = {
  Home: require('../assets/task1.png'),
  Work: require('../assets/task2.png'),
  Personal: require('../assets/task3.png'),
};

const TaskDetails = ({ route }) => {
  const { task } = route.params; // Get task details from navigation params

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* Task category icon */}
        <Image source={taskImages[task.category]} style={styles.taskIcon} />
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
        <Text style={styles.category}>
          <Text style={styles.bold}>Category:</Text> {task.category}
        </Text>
        <Text style={styles.date}>
          <Text style={styles.bold}>Date & Time:</Text> {task.date}
        </Text>
      </View>
    </View>
  );
};

export default TaskDetails;
