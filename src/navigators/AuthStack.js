import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator   screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Login" component={screens.LoginScreen} />
      <Stack.Screen name="SignUp" component={screens.SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
