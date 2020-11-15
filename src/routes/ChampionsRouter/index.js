import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Champion from "../../screens/champions";
import ChampionDetails from "../../screens/ChampionsDetails";
const StackNavigation = createStackNavigator();

export const ChampionsRouter = () => {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigation.Screen name="Champion" component={Champion} />

      <StackNavigation.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerTintColor: "#ffff",
          headerStyle: { backgroundColor: "#000" },
        }}
        name="Champion-Details"
        component={ChampionDetails}
      />
    </StackNavigation.Navigator>
  );
};
