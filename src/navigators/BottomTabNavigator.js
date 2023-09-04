import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../screens/index';
import {theme} from '../constants/theme';
import {View, Image} from 'react-native';
import {components} from '../components';
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
        },
        tabBarActiveTintColor: '#555',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="CareTeam"
        component={screens.CareTeam}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <components.TabBarIcon
                source={theme.Images.CARE_TEAM_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Task"
        component={screens.Tasks}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <components.TabBarIcon
                source={theme.Images.TASK_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={screens.DashBoard}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <components.TabBarIcon
                source={theme.Images.HOME_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MedScreen"
        component={screens.MedScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <components.TabBarIcon
                source={theme.Images.MEDS_ICON}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={screens.ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <components.TabBarIcon
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
