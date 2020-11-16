import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const AllMeals = () => {
const [comida, setComida] = useState([]);


    useEffect(() => {
        axios.get("/api/saved").then((response) => {
            console.log(response.data);
             setComida(response.data);
        });
    }, []);





    return (
        <div>
            <>
            <div className="container">
               
            <nav class="navbar navbar-dark bg-dark">
            <Link to="/technique">
      <button type="button" class="btn btn-outline-success">Techniques</button>
      </Link>
      <Link to="/last">
 <button class="btn btn-sm btn-outline-secondary" type="button">dash</button>
 </Link>
    </nav>
 <div className="row">
     <div className="col-sm-12 text-right">
    
     </div>
 </div>
 <div className="row">
<div className="col">
                        
<table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Meal Name</th>
      <th scope="col">ingridents</th>
      <th scope="col">description</th>
      <th scope="col">calories</th>
    </tr>
  </thead>
  <tbody>
  {comida.length ? comida.map(food => (
    <tr>
      <th scope="row">{food.meal_name}</th>
  <td>{food.ingridients}</td>
  <td>{food.description}</td>
  <td>{food.calories}</td>
  <td>
      
      <button className="btn btn-secondary">Change</button>
  </td>

  <td>
  <Link to="/saved/make">
      <button className="btn btn-secondary">Add New</button>
      </Link>
  </td>

  <td>
      <button className="btn btn-danger">Remove</button>
  </td>
    </tr>
      )) : <h1>No move found</h1>}
  </tbody>
</table>





                    </div>
                    </div>
                    </div>
            </>
        </div>
    );
};

export default AllMeals;