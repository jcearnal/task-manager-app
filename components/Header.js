import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/HeaderStyles';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const isHomeScreen = route.name === 'Home';
  const headerTitle = title || (isHomeScreen ? 'Task Manager' : 'Task Details');

  return (
    <View style={styles.header}>
      {/* Show back button if not on HomeScreen */}
      {!isHomeScreen && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
