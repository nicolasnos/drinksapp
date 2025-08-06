import * as React from "react";
import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, StyleSheet } from "react-native";
import { DrinkContext } from "../Context/DrinkContext";
import { Ingredients } from "../Components/Ingredients";
import { Measures } from "../Components/Measures";
import { Preparation } from "../Components/Preparation";
import { Header } from "../Components/Header";

export function Landing() {
  const { drink, loading } = useContext(DrinkContext);

  if (loading) return;
  <View>
    <Text>Loading...</Text>
    <StatusBar style="auto" />
  </View>;
  if (!drink)
    return (
      <View>
        <Text>No drink found</Text>
        <StatusBar style="auto" />
      </View>
    );
  else
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          width: "100%",
          height: "100%",
        }}
      >
        <Header />
        <Text style={styles.drinkTitle}>Your daily drink</Text>
        <Text style={styles.drinkName}>{drink.drinks?.[0].strDrink}</Text>
        <Image
          source={drink && { url: drink.drinks?.[0].strDrinkThumb }}
          style={styles.initialImage}
        />
        <View style={styles.container}>
          <Ingredients drink={drink} />
          <Measures drink={drink} />
        </View>
        <Preparation drink={drink} />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100dvh",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },

  drinkTitle: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 14,
    fontFamily: "Roboto",
  },
  drinkName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Roboto",
    textDecorationLine: "underline",
    textDecorationColor: "#000",
  },
  initialImage: {
    width: 180,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});
