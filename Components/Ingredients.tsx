import React, { useContext, useState, useEffect } from "react";
import { DrinkContext } from "../Context/DrinkContext";
import { Text, View, FlatList, StyleSheet } from "react-native";

export const Ingredients = () => {
  const { drink } = useContext(DrinkContext);
  const [ingredients, setIngredients] = useState<String[]>([]);

  useEffect(() => {
    if (drink?.drinks) {
      console.log("first");
      const current = drink.drinks[0];
      const ingredientList: string[] = [];

      Object.entries(current).forEach(([key, value]) => {
        if (key.includes("strIngredient") && value) {
          ingredientList.push(value as string);
        }
      });

      setIngredients(ingredientList);
    }
  }, [500]);

  return (
    <View>
      <Text style={styles.titleText}>Ingredients:</Text>
      <FlatList
        data={ingredients}
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
