import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DrinkContext, DrinkProvider } from "./Context/DrinkContext";
import { Landing } from "./Views/Landing";

export default function App() {
  return (
    <DrinkProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Landing />
      </View>
    </DrinkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
