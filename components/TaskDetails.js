import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const TaskDetails = ({ route }) => {
  const { task } = route.params;

  console.log(`Viewing Task Details: ${task.title}`);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* Ensure all text is inside a <Text> component */}
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  content: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 10,
  },
});

export default TaskDetails;
