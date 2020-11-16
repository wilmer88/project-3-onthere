import React from 'react';
// import axios from "axios";
// import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import { response } from 'express';

const MakeMeal = () => {
 
 return (
        <div>
            <>
            <div classNameName="container">
          <div classNameName="row">
          
            <div className="col-sm-12">
       <nav className="navbar navbar-dark bg-dark">
            <Link to="/technique">
      <button type="button" className="btn btn-outline-success">Techniques</button>
      </Link>
      <Link to="/all">
 <button className="btn btn-sm btn-outline-secondary" type="button">Nutrition</button>
 </Link>
    </nav>


  <form>
  <div class="form-group">
    <label for="exampleFormControlInput1"><strong>Meal Name</strong></label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  </div>
 
 
  <div class="form-group">
    <label for="exampleFormControlTextarea1"><strong>Ingridients</strong></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1"><strong>Description</strong></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  
   <div className="form-group">
    <label htmlfor="calories"><strong>Calories</strong></label>
    <input type="calories" className="form-control"/>
  </div>



</form>
 
  
  <button type="button" className="btn btn-sm btn-outline-secondary">Make A Meal</button>

   </div>
    </div>
     </div>
</>
        </div>
    );
};
export default MakeMeal;