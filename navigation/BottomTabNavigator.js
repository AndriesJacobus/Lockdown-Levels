import * as React from 'react';
import { Platform, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  let options = {}

  if (Platform.OS === 'ios') {
    options = {
      style: {
        paddingTop: 10,
        paddingBottom: 25,
      },
    }
  } else {
    options = {
      style: {
        paddingTop: 10,
      },
      labelStyle: {
        marginTop: 5,
      },
    }
  }

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={options}>

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} itype="ion" name="ios-list" />,
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: 'Info',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} itype="en" name="info" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Info':
      return 'Level Info';
  }
}
