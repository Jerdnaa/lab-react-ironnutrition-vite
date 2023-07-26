import { Card, Col, Button } from "antd";

const FoodBox = ({food, deleteFood}) => {
    return (
        <Col>
            <Card>
                <p>{food.name}</p>
                    <img src={food.image} style={{height: "100px"}}/>
                    <p>Calories: {food.calories}</p>
                    <p>Servings {food.servings}</p>
                    <p>
                        <b>Total Calories: {food.servings * food.calories} </b> kcal
                    </p>
                    <Button onClick={() => deleteFood(food.id)}>Delete</Button>
            </Card>
            

        </Col>
    );
}
 
export default FoodBox;

// {foods.map(oneFood => {
//     return (
//       <>
//         <img src={oneFood.image} alt="food" style={{height: "100px"}}/>
//         <h3>{oneFood.name}</h3>
//       </>
//     )
//   })}