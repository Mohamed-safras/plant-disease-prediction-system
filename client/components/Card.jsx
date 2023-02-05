import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../theme/colors";

export default function Card({ src, title, description, navigation }) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("Predict")}
    >
      <View style={styles.image}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          source={{
            uri: src,
          }}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description.length > 50
            ? `${description.slice(0, 100)}...`
            : description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: colors.colorBlack,
    marginBottom: 15,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0,0,0,0.7)",
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        elevation: 2,
        shadowColor: "rgba(0,0,0,0.7)",
      },
    }),
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.colorGray,
  },
  description: {
    color: colors.colorGray,
  },
  detailContainer: {
    padding: 10,
  },
});
