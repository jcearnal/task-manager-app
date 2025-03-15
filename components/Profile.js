import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import profilePic from '../assets/profile.jpg';

const Profile = ({ name }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={profilePic} 
        style={styles.image} 
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BB86FC', // Purple accent text
  },
});

export default Profile;
