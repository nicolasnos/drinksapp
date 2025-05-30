import React, { useContext, useState, useEffect } from "react";
import { DrinkContext } from "../Context/DrinkContext";
import { Text, View, FlatList, StyleSheet } from "react-native";

export const Preparation = () => {
  const { drink }: object = useContext(DrinkContext);
  const step = drink.drinks[0].strInstructions;
  return (
    <View style={styles.containter}>
      <Text style={styles.titleText}>Preparation</Text>
      <Text style={styles.stepText}>{step}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  stepText: {
    fontSize: 20,
    color: "#333",
    marginBottom: 10,
  },
});
