import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext, ThemeProvider } from "../context/theme";
import { colors } from "../theme/colors";
const width = Dimensions.get("window").width;
export default function Button({ label, navigation, name }) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonContainer,
        backgroundColor:
          theme === "dark" ? colors.colorGreen : colors.darkBackground,
      }}
    >
      <Pressable
        style={styles.button}
        onPress={() => navigation && navigation.navigate("Medicines")}
      >
        <Ionicons
          style={styles.buttonIcon}
          name={name}
          size={30}
          color={colors.colorWhite}
        />
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 60,
    padding: 3,
    marginBottom: 5,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: colors.colorWhite,
    fontSize: 16,
    fontWeight: "900",
  },
});
