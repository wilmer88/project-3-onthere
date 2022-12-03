import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import "./Saved.css"
const Saved = () => {
  const [comida, setcomida] = useState([]);
const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
    params: {targetCalories: '2000', timeFrame: 'day'},
    headers: {
      'x-rapidapi-key': 'a218f45278mshe32a9b00f80b814p17b130jsn334b9e9c6145',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
   setcomida(response.data.meals)
  //  console.log(meals)
  }).catch(function (error) {
    console.error(error);
  });
  


    return (
<div>
<>
<div className="container">
<nav class="navbar navbar-dark bg-dark">
      <Link to="/technique">
      <button class="btn btn-outline-success" type="button">Technique</button>
      </Link>
      <Link to="/all">
    <button class="btn btn-sm btn-outline-secondary" type="button">nutrition</button>
    </Link>
</nav>
        <div className="row">
          <div className="col-sm-3"></div>
            
          <div className="col-sm-6">
          <div className="row">
  <div className="card">
      <img className="card-top" src="" alt="Card cap"/>
      <div className="card-body">
        <h5 className="card-title">Steam fish</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
      {comida.length ? comida.map(food => (
        <li className="list-group-item">{food.title}</li>
      )): <li className="list-group-item"> Nothing here</li>}
      </ul>
    
      <div className="card-body">
      {/* <Link href={"/" }className="card-Link">Card Link</Link>
        <Link href={"/"} className="card-Link">Another Link</Link> */}
      </div>
    </div>
    <div className="card">
      <img className="card-top" src="" alt="Card cap"/>
      <div className="card-body">
        <h5 className="card-title">steam</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
      {comida.length ? comida.map(food => (
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
</div>
</>
</div>
     
    );
};

export default Saved;