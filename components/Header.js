import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import icons for back button

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isHomeScreen = route.name === 'Home'; // Check if we're on the home screen
  const headerTitle = isHomeScreen ? 'Task Manager' : 'Task Details'; // Set dynamic title

  return (
    <View style={styles.header}>
      {!isHomeScreen && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03dac6',
    paddingTop: 50, // Adjust for iOS notch
    paddingBottom: 20,
    paddingHorizontal: 15,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 55, // Adjusted for iOS
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
