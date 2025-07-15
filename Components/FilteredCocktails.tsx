import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { DrinkContext } from "../Context/DrinkContext";

export const FilteredCocktails = () => {
  const { searchResults, loading } = React.useContext(DrinkContext);
  return loading ? (
    <Text>Loading...</Text>
  ) : searchResults.length === 0 ? (
    <Text>No drinks found with that ingredient</Text>
  ) : (
    <FlatList
      data={searchResults}
      numColumns={2}
      key={"_" + searchResults.length}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Pressable onPress={() => console.log(item.strDrink)}>
            <Text style={styles.title}>
              {item.strDrink.length > 25 ? item.strDrink[25] : item.strDrink}
            </Text>
            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
          </Pressable>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  item: {
    marginVertical: 8,
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    width: "45%",
    height: 180,
    gap: 10,
    marginHorizontal: "auto",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
});
