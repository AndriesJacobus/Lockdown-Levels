import * as React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: Colors.tabIconSelected,
    },
    headerTintColor: "white",
  });

  let options = {};

  if (Platform.OS === "ios") {
    options = {
      style: {
        paddingTop: 10,
        paddingBottom: 25,
      },
    };
  } else {
    options = {
      style: {
        height: 60,
        paddingTop: 10,
      },
      labelStyle: {
        marginTop: 5,
        marginBottom: 5,
      },
    };
  }

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={options}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} itype="ion" name="ios-list" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: "Info",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} itype="en" name="info" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Home";
    case "Info":
      return "Level Info";
  }
}
