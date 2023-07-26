import { useState } from "react";
import "../App.css";
import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import { v4 as uuidv4 } from 'uuid';
import Search from "./Search";

const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson)
    const removeItemHandler = (id) => {
      setFoods(prevFoods => {
        return prevFoods.filter(pizza => pizza.id !== id)
      })
    }
  
    const addFoodHandler = (foodName, image, calories, servings) => {
      const obj = {
        id: uuidv4(),
        name: foodName,
        image: image,
        calories: +calories,
        servings: +servings
      };
      setFoods([obj, ...foods])
    }
    
    return (
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
        <Search essen={foods} setEssen={setFoods}/>
        <AddFoodForm addNewFood={addFoodHandler}/>
        {foods.map(oneFood => {
          return <FoodBox key={oneFood.id} food={oneFood} deleteFood={removeItemHandler}/>
        })}
      </div>
    );
}
 
export default FoodList;