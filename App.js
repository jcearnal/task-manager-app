import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import TaskDetails from './components/TaskDetails';
import AddTaskScreen from './components/AddTaskScreen';
import { TaskProvider } from './components/TaskContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    // Provides task management state to the entire app
    <TaskProvider> 
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false, // Removes default navigation headers
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} />
            <Stack.Screen name="AddTask" component={AddTaskScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </TaskProvider>
  );
}
