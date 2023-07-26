import { useState } from "react";
import { Divider, Input, Button } from "antd";

const AddFoodForm = ({addNewFood}) => {
    const [myNameField, setMyNameField] = useState("")
    const [myImageField, setMyImageField] = useState("")
    const [myCaloriesField, setMyCaloriesField] = useState(0)
    const [myServingsField, setMyServingsField] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()
        addNewFood(myNameField, myImageField, myCaloriesField, myServingsField)
        setMyNameField("")
        setMyImageField("")
        setMyCaloriesField(0)
        setMyServingsField(0)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Divider>Add Food Entry</Divider>
                <label>Name: 
                    <Input type="text" name="name" value={myNameField} onChange={event => {
                        console.log(event)
                        setMyNameField(event.target.value)}}  />
                </label>
                <label>Image: 
                    <Input type="text" name="image" value={myImageField} onChange={event => {
                        console.log(event)
                        setMyImageField(event.target.value)}}  />
                </label>
                <label>Calories: 
                    <Input type="number" name="calories" value={myCaloriesField} onChange={event => {
                        console.log(event)
                        setMyCaloriesField(event.target.value)}} />
                </label>
                <label>Servings: 
                    <Input type="number" name="servings"  value={myServingsField} onChange={event => {
                        console.log(event)
                        setMyServingsField(event.target.value)}} />
                </label>
                    <Button type="submit">Create</Button>
            </form>
        </div>
    );
}
 
export default AddFoodForm;