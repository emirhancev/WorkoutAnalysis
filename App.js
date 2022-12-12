import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './src/views/OnBoardScreen';
import HomeScreen from './src/views/HomeScreen';
import CrunchOnBoard from './src/views/CrunchOnBoard';
import PushUpOnBoard from './src/views/PushUpOnBoard';
import SquatOnBoard from './src/views/SquatOnBoard';
import COLORS from './src/consts/colors';

const Stack = createNativeStackNavigator();

const App = () => {

  return(
     <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} options={{headerShown: false}}/>
           <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: true,headerTintColor:COLORS.light,title:'            Workout Analysis',headerTitleStyle:{color:COLORS.light},headerStyle:{backgroundColor:COLORS.orange}}}/>
           <Stack.Screen name="CrunchOnBoard" component={CrunchOnBoard} options={{headerShown: true,headerTintColor:COLORS.light,title:'            Workout Analysis',headerTitleStyle:{color:COLORS.light},headerStyle:{backgroundColor:COLORS.orange}}}/>
           <Stack.Screen name="PushUpOnBoard" component={PushUpOnBoard} options={{headerShown: true,headerTintColor:COLORS.light,title:'            Workout Analysis',headerTitleStyle:{color:COLORS.light},headerStyle:{backgroundColor:COLORS.orange}}}/>
           <Stack.Screen name="SquatOnBoard" component={SquatOnBoard} options={{headerShown: true,headerTintColor:COLORS.light,title:'            Workout Analysis',headerTitleStyle:{color:COLORS.light},headerStyle:{backgroundColor:COLORS.orange}}}/>
        </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;