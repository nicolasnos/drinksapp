import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  Keyboard,
} from "react-native";
import { DrinkContext } from "../Context/DrinkContext";
import { FilteredCocktails } from "../Components/FilteredCocktails";
import { ModalCocktail } from "../Components/ModalCocktail";

export const Search = () => {
  const {
    ingredientSearch,
    setIngredientSearch,
    searchByIngredient,
    searchResults,
    displayModal,
  } = React.useContext(DrinkContext);

  const [searched, setSearched] = useState(false);
  React.useEffect(() => {
    if (searchResults.length > 0) {
      setSearched(true);
    }
  }, [searchResults]);

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
        onSubmitEditing={() => {
          Keyboard.dismiss();
          searchByIngredient(ingredientSearch);
          setSearched(true);
        }}
      />
      <Pressable
        style={styles.searchButton}
        onPress={() => {
          Keyboard.dismiss();
          searchByIngredient(ingredientSearch);
        }}
      >
        <Image
          style={styles.searchLogo}
          source={require("../assets/magnifier.jpg")}
          alt="Search Icon"
        />
      </Pressable>
      {Array.isArray(searchResults) && searchResults.length > 0 && (
        <FilteredCocktails />
      )}
      {!Array.isArray(searchResults) && searched == true && (
        <Text>No drinks found with that ingredient</Text>
      )}
      {displayModal && <ModalCocktail />}
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

  searchButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    right: 0,
    top: 34,
    justifyContent: "center",
    alignItems: "center",
  },

  searchLogo: {
    width: 60,
    height: 38,
    resizeMode: "contain",
    borderRadius: 30,
  },
});
