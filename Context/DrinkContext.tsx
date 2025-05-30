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

  const initialReq = async () => {
    const initialDrink = await client.initialReq(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    setDrink(initialDrink);
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
    <DrinkContext.Provider value={{ drink, addDrink, removeDrink }}>
      {children}
    </DrinkContext.Provider>
  );
};

export { DrinkContext, DrinkProvider };
