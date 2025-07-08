import { NavigationContainer } from "@react-navigation/native";
import { DrinkContext, DrinkProvider } from "./Context/DrinkContext";
import { createStackNavigator } from "@react-navigation/stack";
import { Landing } from "./Views/Landing";
import { Search } from "./Views/Search";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <DrinkProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Landing} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </DrinkProvider>
  );
}
