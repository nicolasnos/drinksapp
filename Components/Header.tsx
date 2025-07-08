import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable
        style={styles.headerButton}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={styles.headerButtonText}>Search</Text>
      </Pressable>
      <Pressable
        style={styles.headerButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.headerButtonText}>Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
    backgroundColor: "#f8f8f8",
    width: "100%",
  },
  headerButton: {
    padding: 10,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
  },
  headerButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
