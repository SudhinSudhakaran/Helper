import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles';
const SplashScreen = () => {
  const navigation = useNavigation();
  const isLoggedIn = true;

  const navigationHandler = setTimeout(() => {
    const routeName = isLoggedIn ? 'MainStack' : 'AuthStack';
    navigation.reset({
      index: 0,
      routes: [{name: routeName}],
    });
  }, 2000);

  useEffect(() => {
    return () => {
      clearTimeout(navigationHandler);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>SPLASH SCREEN</Text>
    </View>
  );
};

export default SplashScreen;
