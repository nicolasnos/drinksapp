import React, { useContext } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from "react-native";
import { DrinkContext } from "../Context/DrinkContext";
import { Ingredients } from "./Ingredients";
import { Preparation } from "./Preparation";
import { Measures } from "./Measures";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const ModalCocktail = () => {
  const { modalCocktail, setDisplayModal } = useContext(DrinkContext);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <Modal animationType="slide" visible={true}>
            <View style={styles.overlay}>
              <ScrollView contentContainerStyle={styles.generalContainer}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}
                >
                  {modalCocktail[0].strDrink}
                </Text>
                <Image
                  source={
                    modalCocktail && {
                      url: modalCocktail[0].strDrinkThumb,
                    }
                  }
                  style={styles.initialImage}
                />
                <View style={styles.textContainer}>
                  <Ingredients drink={modalCocktail} />
                  <Measures drink={modalCocktail} />
                </View>
                <Preparation drink={modalCocktail} />
                <Pressable onPress={() => setDisplayModal(false)}>
                  <Text
                    style={{ color: "red", fontSize: 22, paddingVertical: 18 }}
                  >
                    Cheers
                  </Text>
                </Pressable>
              </ScrollView>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  initialImage: {
    width: 180,
    height: 200,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // dark overlay, change to '#000' for solid
    justifyContent: "center",
    alignItems: "center",
  },

  generalContainer: {
    flexGrow: 1,
    marginVertical: 60,
    height: "auto",
    width: "80%",
    backgroundColor: "#fff", // this is your modal's background
    padding: 20,
    borderRadius: 10,
    elevation: 5, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});
