import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { DrinkContext } from "../Context/DrinkContext";

export const FilteredCocktails = () => {
  const { searchResults, loading, searchByName } =
    React.useContext(DrinkContext);
  return loading ? (
    <Text>Loading...</Text>
  ) : searchResults.lenght === 0 ? (
    <Text>No drinks found with that ingredient</Text>
  ) : (
    <FlatList
      data={searchResults}
      numColumns={2}
      key={"_" + searchResults.lenght + 1}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Pressable
            style={{
              height: 120,
              width: "100%",
              alignItems: "center",
            }}
            onPress={() => searchByName(item.strDrink)}
          >
            <Text style={styles.title}>
              {item.strDrink.length > 8
                ? item.strDrink.slice(0, 8) + "..."
                : item.strDrink}
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
    flexGrow: 1,
    padding: 10,
    paddingBottom: 100,
  },
  item: {
    marginVertical: 8,
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    width: "45%",
    gap: 10,
    marginHorizontal: "auto",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: "90%",
    height: "65%",
    resizeMode: "contain",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: "auto",
  },
});
