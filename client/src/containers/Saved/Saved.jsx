import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios'

const Saved = () => {
  const [meals, setMeals] = useState([{title:"pizza"},{title: "bagels"}]);
  // const options = {
  //   method: 'GET',
  //   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
  //   params: {targetCalories: '2000', timeFrame: 'day'},
  //   headers: {
  //     'x-rapidapi-key': 'a218f45278mshe32a9b00f80b814p17b130jsn334b9e9c6145',
  //     'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //  setMeals(response.data.meals)
  // //  console.log(meals)
  // }).catch(function (error) {
  //   console.error(error);
  // });
  


    return (


<div className="container">
        <div className="row">
          <div className="col">


  <div className="card">
      <img className="card-top" src="..." alt="Card cap"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
      {meals.length? meals.map(food => (
        <li className="list-group-item">{food.title}</li>
      )): <li className="list-group-item"> Nothing here</li>}
      </ul>
    
      <div className="card-body">
      {/* <Link href={"/" }className="card-Link">Card Link</Link>
        <Link href={"/"} className="card-Link">Another Link</Link> */}
      </div>
    </div>

</div>
</div>
</div>


     
    );
};

export default Saved;