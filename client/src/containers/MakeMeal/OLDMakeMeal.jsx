import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { response } from 'express';

const MakeMeal = () => {
    const [meal_name, setMealName] = useState("");
    const [ingridients, setIngridients] = useState("");
    const [description, setDescription] = useState("");
    const [calories, setCalories] = useState("");

const handleSubmit = (e) =>{
    e.preventDefault();
axios.post("/api/saved", {meal_name, ingridients, description, calories}).then(response => {
    console.log(response.data);
}).catch((err) => {
    console.log(err)
})
}
 return (
        <div>
            <>
            <div classNameName="container">
          <div classNameName="row">
            <div classNameName="col-sm-6"></div>
            <div className="col-sm-6">
       <nav className="navbar navbar-dark bg-dark">
            <Link to="/technique">
      <button type="button" className="btn btn-outline-success">Techniques</button>
      </Link>
      <Link to="/">
 <button className="btn btn-sm btn-outline-secondary" type="button">Nutrition</button>
 </Link>
    </nav>
  
     <form>
  <div className="form-group">
    <label htmlfor="meal_name"><strong>Meal Name</strong></label>
    <input type="meal-name" className="form-control" id="meal_name" name="meal_name" value={meal_name} onChange={(e) => {
        setMealName(e.target.value)
    }}/>
  </div>
  
  <div className="form-group">
    {/* <label htmlfor="ingridients"><strong>Ingridients</strong></label>
    <input type="ingridients" className="form-control" id="ingridients" name="ingridients" value={ingridients} onChange={(e) => {
        setIngridients(e.target.value)
    }}/> */}
  </div>
<div className="form-group">
    {/* <label htmlfor="description"><strong>Description</strong></label>
    <input type="description" className="form-control" id="description" name="ingridients" value={description} onChange={(e) => {
        setDescription(e.target.value)
    }}/> */}
  </div>
   <div className="form-group">
    <label htmlfor="calories"><strong>Calories</strong></label>
    {/* <input type="calories" className="form-control" id="calories" name="calories" value={calories} onChange={(e) => {
        setCalories(e.target.value)
    }}/> */}
  </div>
  <button type="button" className="btn btn-sm btn-outline-secondary">Make A Meal</button>
</form>
   </div>
    </div>
     </div>
</>
        </div>
    );
};
export default MakeMeal;