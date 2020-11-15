import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Items from "../../screens/Items";
import ItemDetails from "../../screens/ItemDetails";
const StackNavigation = createStackNavigator();

export const ItemsRouter = () => {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigation.Screen name="Items" component={Items} />

      <StackNavigation.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerTintColor: "#ffff",
          headerStyle: { backgroundColor: "#000" },
        }}
        name="Item-Details"
        component={ItemDetails}
      />
    </StackNavigation.Navigator>
  );
};
