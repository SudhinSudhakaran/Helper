import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator   screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Login" component={Screens.LoginScreen} />
      <Stack.Screen name="SignUp" component={Screens.SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
