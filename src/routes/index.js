import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import Champions from "../screens/champions";
import Items from "../screens/Items";

const BottomNavigation = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer independent={true}>
    <BottomNavigation.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#111111",
        style: { height: 60 },
        tabStyle: { elevation: 1 },
        labelStyle: { fontSize: 11, marginBottom: 3 },
        activeBackgroundColor: "#111111",
        inactiveTintColor: "#F9F9F9",
        activeTintColor: "#c38f2c",
      }}
    >
      <BottomNavigation.Screen
        name="Home"
        component={Champions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" color={color} size={size} />
          ),
        }}
      />

      <BottomNavigation.Screen
        name="Items"
        component={Items}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
    </BottomNavigation.Navigator>
  </NavigationContainer>
);

export default Routes;
