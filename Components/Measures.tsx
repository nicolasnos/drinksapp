import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

export const Measures = ({ drink }) => {
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
    } else {
      const current = drink[0];
      const meassureList: string[] = [];

      Object.entries(current).forEach(([key, value]) => {
        if (key.includes("strMeasure") && value) {
          meassureList.push(value as string);
        }
        setMeasure(meassureList);
      });
    }
  }, [1500]);

  return (
    <View>
      <Text style={styles.titleText}>Measures:</Text>
      {measure.map((meassureItem, index) => (
        <Text key={index} style={styles.itemText}>
          {meassureItem}
        </Text>
      ))}
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
