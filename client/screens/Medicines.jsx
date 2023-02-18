import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ThemeContext } from "../context/theme";
import { colors } from "../theme/colors";
import { dark, light } from "../theme/theme";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function Medicines() {
  const { theme } = useContext(ThemeContext);
  const route = useRoute();
  console.log(route);
  const { control, treatements, description } = route.params;
  console.log(treatements);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor:
            theme === "dark" ? dark.background : light.background,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.description}>
          <Text
            style={[
              styles.descriptionText,
              {
                textTransform: "uppercase",
                fontSize: 18,
                color:
                  theme === "dark"
                    ? dark.predictionColor
                    : light.predictionColor,
              },
            ]}
          >
            Description
          </Text>
          <Text
            style={[styles.descriptionText, { color: colors.inactiveColor }]}
          >
            {description}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.descriptionText,
              {
                fontSize: 18,
                color:
                  theme === "dark"
                    ? dark.predictionColor
                    : light.predictionColor,
              },
            ]}
          >
            Treatements
          </Text>
          {treatements.map((treatement, index) => (
            <View style={[styles.treatement, {}]} key={index}>
              <Text
                style={[
                  styles.descriptionText,
                  { fontSize: 16, color: colors.colorWhite },
                ]}
              >
                {index + 1} . {treatement}
              </Text>
            </View>
          ))}
        </View>

        <View>
          <Text
            style={[
              styles.descriptionText,
              {
                fontSize: 18,
                color:
                  theme === "dark"
                    ? dark.predictionColor
                    : light.predictionColor,
              },
            ]}
          >
            Control
          </Text>
          <Text
            style={[
              styles.descriptionText,
              { fontSize: 16, color: colors.inactiveColor },
            ]}
          >
            {control}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  description: {
    width: "100%",
    marginVertical: 5,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 5,
  },
  treatement: {
    backgroundColor: colors.colorGreen,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
});
