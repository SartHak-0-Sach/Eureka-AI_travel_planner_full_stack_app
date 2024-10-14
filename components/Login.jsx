import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("./../assets/images/landing image.webp")}
        style={{
          width: "100%",
          height: 520,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "roboto-bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "roboto",
            fontSize: 17,
            textAlign: "center",
            color: "#7d7d7d",
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Personalised itineraries at
          your fingertips.Travel smarter with AI-driven insights.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              fontFamily: "roboto",
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 99,
    marginTop: "20%",
  },
});
