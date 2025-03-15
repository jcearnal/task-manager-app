import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Toggle Greeting</Text>
    </TouchableOpacity>
  );
};

// Button styles 
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BB86FC', 
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'black', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
