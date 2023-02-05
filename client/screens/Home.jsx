import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import { Switch, Text } from "react-native";
import { ThemeContext } from "../context/theme";
import { colors } from "../theme/colors";

import Medicines from "./Medicines";
import Menu from "./Menu";
import Predict from "./Predict";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Predict"
        component={Predict}
        options={{
          tabBarLabel: "Home",
          title: "Home",
          headerTintColor: colors.colorWhite,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.colorGreen,
          },
        }}
      />
      <HomeStack.Screen
        name="Medicines"
        component={Medicines}
        options={{
          tabBarLabel: "Medicines",
          title: "Medicines",
          headerTintColor: colors.colorWhite,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.colorGreen,
          },
          headerRight: () => null,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
