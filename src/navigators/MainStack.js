import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator   screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStack;
