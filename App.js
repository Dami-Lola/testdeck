/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/screens/Deck';
import { StyleSheet } from 'react-native';
import CreateFlashCard from './src/screens/CreateFlashCard';
import Review from './src/screens/Review';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Deck">
        <Stack.Screen name="Deck" component={HomeScreen} />
        <Stack.Screen name="Create Flash Card" component={CreateFlashCard} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
export default App;
