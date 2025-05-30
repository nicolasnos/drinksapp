import React, { useContext, useState, useEffect } from "react";
import { DrinkContext } from "../Context/DrinkContext";
import { Text, View, FlatList, StyleSheet } from "react-native";

export const Measures = () => {
  const { drink } = useContext(DrinkContext);
  const [measure, setMeasure] = useState<String[]>([]);

  useEffect(() => {
    if (drink?.drinks) {
      const measureArr = drink.drinks[0];
      const currentMeasure: string[] = [];

      Object.entries(measureArr).forEach(([key, value]) => {
        if (key.includes("strMeasure") && value) {
          currentMeasure.push(value as string);
        }
      });

      setMeasure(currentMeasure);
    }
  }, [1500]);

  return (
    <View>
      <Text style={styles.titleText}>Measures</Text>
      <FlatList
        data={measure}
        renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  itemText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});
