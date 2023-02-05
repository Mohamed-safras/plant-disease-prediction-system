import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContext, ThemeProvider } from "./context/theme";
import HomeScreen from "./screens/Home";
import Settings from "./screens/Settings";
import Weather from "./screens/Weather";
import { colors } from "./theme/colors";
const Tab = createBottomTabNavigator();

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                  size = 28;
                } else if (route.name === "Whether") {
                  iconName = focused ? "cloudy-night" : "cloudy-night-outline";
                  size = 28;
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                  size = 28;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },

              tabBarStyle: [
                {
                  elevation: 0,
                  height: 60,
                },
                null,
              ],
              tabBarShowLabel: false,
              tabBarActiveTintColor: colors.colorGreen,
              tabBarInactiveTintColor: colors.inactiveColor,
              headerShown: false,
            })}
          >
            <Tab.Screen
              options={{ headerShown: false, tabBarShowLabel: true }}
              name="Home"
              component={HomeScreen}
            />
            <Tab.Screen
              name="Whether"
              component={Weather}
              options={{ headerShown: true, tabBarShowLabel: true }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: true, tabBarShowLabel: true }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
