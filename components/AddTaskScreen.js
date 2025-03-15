import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header.js';
import { TaskContext } from '../components/TaskContext.js'; 
import styles from '../styles/AddTaskScreenStyles';

const AddTaskScreen = ({ navigation }) => {
  const { addTask } = useContext(TaskContext); 

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  // Creates and adds a new task
  const handleAddTask = () => {
    if (!title.trim() || !description.trim() || !category) {
      alert('Please fill in all fields');
      return;
    }

    const newTask = {
      id: Math.random().toString(),
      title,
      description,
      category,
      date: date.toLocaleString(),
      completed: false,
      icon:
        category === 'Work'
          ? require('../assets/task2.png')
          : category === 'Home'
          ? require('../assets/task1.png')
          : require('../assets/task3.png'),
    };

    console.log("Adding Task:", newTask);

    addTask(newTask);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title="Create a Task" />

      <View style={styles.content}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task title"
          placeholderTextColor="#aaa"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task description"
          placeholderTextColor="#aaa"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Category:</Text>
        <DropDownPicker
          open={open}
          value={category}
          items={[
            { label: 'Work', value: 'Work' },
            { label: 'Home', value: 'Home' },
            { label: 'Personal', value: 'Personal' },
          ]}
          setOpen={setOpen}
          setValue={setCategory}
          containerStyle={{ height: 50, marginBottom: 15 }}
        />

        <Text style={styles.label}>Date & Time:</Text>
        <DateTimePicker
          value={date}
          mode="datetime"
          display="spinner"
          textColor="white"
          onChange={(event, selectedDate) => setDate(selectedDate || date)}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTaskScreen;
