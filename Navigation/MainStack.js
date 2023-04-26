import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LogScreen from '../screens/LogScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import TwoImages from '../components/TwoImages';
import FileScreen from '../screens/FileScreen';

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen
            name = 'LogScreen'
            component = { LogScreen }
            />
             <Stack.Screen
            name = 'HomeScreen'
            component = { HomeScreen }
            />
            <Stack.Screen
            name = 'FormScreen'
            component = { FormScreen }
            />
          
            <Stack.Screen
            name = 'FileScreen'
            component = { FileScreen }
            />

        </Stack.Navigator>
      </NavigationContainer>
    );
}



export default MainStack;
