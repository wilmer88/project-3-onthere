// import React, { Component } from 'react';
// import React from 'react';
// import VidCard from "./VidCard/VidCard"
// import {Link} from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
// import { response } from 'express';
import "./Technique.css"
const Technique = () => {
    const [techniques, setTechniques] = useState([])
// const [diciplineName, techniqueName, difficulty, enhances] = useState([

// ]);

useEffect(() => {
    axios.get("/api/technique").then((response) => {
        console.log(response.data);
        setTechniques(response.data);
    });
}, []);




    return (
      <div id="not12">
      <>
      <div className="container">
      <nav class="navbar navbar-dark bg-dark">
      <Link to="/saved">
      <button class="btn btn-outline-success" type="button">Nutrition</button>
      </Link>
      <Link to="/dash">
    <button class="btn btn-sm btn-outline-secondary" type="button">saved videos</button>
    </Link>
</nav>
        <div className="row">
          <div className="col-md-12">

          <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4"><strong> Learn, Teach, Play </strong></h1>
    <p class="lead">by_onThere.</p>
  </div>
</div>
   

    {techniques.length ? techniques.map(weapon => (
  <div className="card">
    <video classname="ra" width="920" height="440" controls class="show" id="video">
              <source src="" type="video/mp4"/>
            </video>
 
  <div className="card-body">
    <h5 className="card-title" key={weapon._id.Technique}><strong>Dicipline Name:_</strong>{weapon.diciplineName}</h5>
    <p className="card-text" {...weapon.enhances} {...weapon.learned} {...weapon.Technique} ></p>
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item"><strong>Technique Name:_</strong>{weapon.techniqueName}</li>
    <li className="list-group-item"><strong>Advantages:_</strong>{weapon.enhances}</li>
 
    <li className="list-group-item" >{weapon.learnd}</li>
  </ul>
  <div className="card-body">
 
  <button type="button" class="btn btn-dark">Save</button>
  </div>
</div>
    )) : <h1>No move found</h1>}
        

    <div className="card">
    <video classname="ra" width="920" height="440" controls class="show" id="video">
              <source src="" type="video/mp4"/>
            </video>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
      {/* <Link href={"/" }className="card-Link">Card Link</Link> */}
        {/* <Link href={"/"} className="card-Link">Another Link</Link> */}
      </div>
    </div>


    <div className="card">
    <video classname="ra" width="920" height="440" controls class="show" id="video">
              <source src="" type="video/mp4"/>
            </video>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
      {/* <Link href={"/" }className="card-Link">Card Link</Link> */}
        {/* <Link href={"/"} className="card-Link">Another Link</Link> */}
      </div>
    </div>



    {/* <div className="card">
      <img className="card-img-top" src="..." alt="Card  cap"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
      <Link href={"/" }className="card-Link">Card Link</Link>
        <Link href={"/"} className="card-Link">Another Link</Link>
      </div>
    </div>


    <div className="card">
      <img className="card-top" src="..." alt="Card cap"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
      <Link href={"/" }className="card-Link">Card Link</Link>
        <Link href={"/"} className="card-Link">Another Link</Link>
      </div>
    </div> */}
               
           
              
              
              
              
              
              
              
              
              
              
              
              
              
                </div>
            </div>
        </div>
        </>
        </div>
    );
};

export default Technique; 