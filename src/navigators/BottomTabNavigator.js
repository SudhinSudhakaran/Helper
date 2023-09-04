import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../screens/index';
import { theme } from '../constants/theme';
import { View, Image } from 'react-native';
import { Components } from '../components';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" // Set the default selected screen here
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.Colors.WHITE_COLOR,
          borderTopRightRadius: responsiveHeight(1.8),
          borderTopLeftRadius: responsiveHeight(1.8),
          height: responsiveHeight(9),
          paddingBottom: responsiveHeight(1.5),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
        },
        tabBarActiveTintColor: '#555',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="CareTeam"
        component={Screens.CareTeam}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Components.TabBarIcon
                source={theme.Images.CARE_TEAM_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Task"
        component={Screens.Tasks}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Components.TabBarIcon
                source={theme.Images.TASK_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Screens.DashBoard}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Components.TabBarIcon
                source={theme.Images.HOME_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MedScreen"
        component={Screens.MedScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Components.TabBarIcon
                source={theme.Images.MEDS_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={Screens.ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Components.TabBarIcon
                source={theme.Images.CHAT_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
