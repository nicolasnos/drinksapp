import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { Client } from "./Client/Client";

const DrinkContext = createContext();

const DrinkProvider = ({ children }: any) => {
  const client = new Client();
  const [drink, setDrink] = useState<String | null>(null);
  const [loading, setLoading] = useState(true);
  const [ingredientSearch, setIngredientSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const initialReq = async () => {
    const initialDrink = await client.initialReq(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    setDrink(initialDrink);
    setLoading(false);
  };

  const searchByIngredient = async (ingredient: string) => {
    setLoading(true);
    const drinks = await client.searchByIngredient(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (drinks.drinks.length > 0) {
      setSearchResults(drinks.drinks);
    }
    setLoading(false);
    if (drinks.drinks.length === 0) {
      alert("No drinks found with that ingredient");
    }
  };

  const addDrink = (newDrink: any) => {
    setDrink(newDrink);
  };

  const removeDrink = () => {
    setDrink(null);
  };

  useEffect(() => {
    initialReq();
  }, []);

  return (
    <DrinkContext.Provider
      value={{
        drink,
        addDrink,
        removeDrink,
        loading,
        ingredientSearch,
        setIngredientSearch,
        searchByIngredient,
        searchResults,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export { DrinkContext, DrinkProvider };
