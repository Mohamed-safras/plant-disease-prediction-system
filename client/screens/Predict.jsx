import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";
import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import placeholder from "../assets/test.jpg";
import Button from "../components/Button";
import { ThemeContext } from "../context/theme";
import { colors } from "../theme/colors";
import { dark, light } from "../theme/theme";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Predict({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const after = true;
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme === "dark" ? dark.background : light.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View
        style={{
          width: width - width * 0.15,
          marginBottom: 10,
          height: height / 2,
          ...styles.shadow,
        }}
      >
        <Image source={placeholder} style={styles.image} />
      </View>
      {after ? (
        <React.Fragment>
          <View
            style={{
              flex: 1,
              width: width - width * 0.15,
              height: "100%",
              borderRadius: 18,
              marginBottom: 5,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                theme === "dark" ? light.background : dark.background,
              ...styles.shadow,
            }}
          >
            <Text
              style={{
                ...styles.text,
                color:
                  theme === "dark"
                    ? light.predictionColor
                    : dark.predictionColor,
              }}
            >
              Disease Type : {"Brown Blide"}
            </Text>
            <Text
              style={{
                ...styles.text,
                color:
                  theme === "dark"
                    ? light.predictionColor
                    : dark.predictionColor,
              }}
            >
              Accuracy : {"100.00%"}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              width: width - width * 0.15,
              ...styles.shadow,
            }}
          >
            <Button
              label="View Medicines"
              navigation={navigation}
              name="medkit-outline"
            />
          </View>
        </React.Fragment>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            width: width - width * 0.15,
            ...styles.shadow,
          }}
        >
          <Button label="Choose a photo" name="image-outline" />
          <Button label="Open Your Camara" name="camera-outline" />
        </View>
      )}

      <StatusBar style={theme === "dark" ? `light` : `dark`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
    resizeMode: "cover",
  },
  footerContainer: {},
  text: {
    fontSize: 18,
    fontWeight: "900",
    marginVertical: 10,
    color: colors.colorGreen,
  },
  shadow: {
    shadowColor: colors.textColor,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});
