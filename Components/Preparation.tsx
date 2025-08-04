import { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

export const Preparation = ({ drink }) => {
  const [step, setStep] = useState("");
  useEffect(() => {
    if (drink?.drinks) {
      setStep(drink.drinks[0].strInstructions);
    } else {
      setStep(drink[0].strInstructions);
    }
  }, [1500]);

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
