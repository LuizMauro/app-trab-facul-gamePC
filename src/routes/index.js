import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import { ChampionsRouter } from "./ChampionsRouter";
import { ItemsRouter } from "./ItemsRouter";
import Items from "../screens/Items";

import IconChampion from "../assets/icons/champion.png";
import IconItem from "../assets/icons/iconItem.png";

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
        name="Champions"
        component={ChampionsRouter}
        listeners
        options={{
          tabBarIcon: () => (
            <Image source={IconChampion} style={{ width: 32, height: 32 }} />
          ),
        }}
      />

      <BottomNavigation.Screen
        name="Items"
        component={ItemsRouter}
        options={{
          tabBarIcon: () => (
            <Image source={IconItem} style={{ width: 32, height: 32 }} />
          ),
        }}
      />
      {/* <BottomNavigation.Screen
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
      /> */}
    </BottomNavigation.Navigator>
  </NavigationContainer>
);

export default Routes;
