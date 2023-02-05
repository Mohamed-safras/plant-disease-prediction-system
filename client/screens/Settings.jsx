import { createDrawerNavigator } from "@react-navigation/drawer";
import { useContext, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { ThemeContext } from "../context/theme";
import { colors } from "../theme/colors";
import { dark, light } from "../theme/theme";

import { Drawer } from "react-native-paper";

const Settings = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    toggle();
  };
  const [active, setActive] = useState("");

  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <Drawer.Item
        label="Second Item"
        active={active === "second"}
        onPress={() => setActive("second")}
      />
    </Drawer.Section>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
