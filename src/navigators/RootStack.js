import * as React from 'react';
import {navigators} from './index';
import {components} from '../components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';
import {StatusBar} from 'react-native';
import {theme} from '../constants/theme';
const Stack = createNativeStackNavigator();
const RootStack = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.Colors.WHITE_COLOR}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={screens.SplashScreen} />
        <Stack.Screen name="AuthStack" component={navigators.AuthStack} />
        <Stack.Screen name="MainStack" component={navigators.MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
