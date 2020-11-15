import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import { ChampionsRouter } from "./ChampionsRouter";
import Items from "../screens/Items";

const BottomNavigation = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer independent={true}>
    <BottomNavigation.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#111111",
        style: { height: 60, borderTopColor: "#111111" },
        tabStyle: { elevation: 1 },
        labelStyle: { fontSize: 11, marginBottom: 3 },
        activeBackgroundColor: "#c38f2c",
        inactiveTintColor: "#F9F9F9",
        activeTintColor: "#F9F9F9",
      }}
    >
      <BottomNavigation.Screen
        name="Home"
        component={ChampionsRouter}
        listeners
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
      <BottomNavigation.Screen
        name="Sla1"
        component={Items}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />

      <BottomNavigation.Screen
        name="Sla2"
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
