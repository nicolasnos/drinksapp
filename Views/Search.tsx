import React from "react";
import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import { DrinkContext } from "../Context/DrinkContext";
import { FilteredCocktails } from "../Components/FilteredCocktails";

export const Search = () => {
  const {
    ingredientSearch,
    setIngredientSearch,
    searchByIngredient,
    searchResults,
  } = React.useContext(DrinkContext);
  return (
    <View>
      <Text>
        Here you can search a cocktail filtering by the main ingredient
      </Text>
      <TextInput
        placeholder="Search by ingredient"
        inputMode="search"
        keyboardAppearance="dark"
        value={ingredientSearch}
        onChangeText={(text) => setIngredientSearch(text)}
        style={styles.input}
      />
      <Pressable onPress={() => searchByIngredient(ingredientSearch)}>
        <Text>Search</Text>
      </Pressable>
      {searchResults.length > 0 && <FilteredCocktails />}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 8,
  },
});
