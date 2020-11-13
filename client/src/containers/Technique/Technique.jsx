// import React, { Component } from 'react';
// import React from 'react';
// import VidCard from "./VidCard/VidCard"
// import {Link} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
// import { response } from 'express';

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
        <div className="container">
        <div className="row">
          <div className="col">

    {techniques.length ? techniques.map(weapon => (
  <div className="card">
  <img className="card-top" src="..." alt="Card  cap"/>
  <div className="card-body">
    <h5 className="card-title" key={weapon._id.Technique}>ytd</h5>
    <p className="card-text" {...weapon.enhances} {...weapon.learned} {...weapon.Technique._id} >gdfg</p>
  </div>
  <ul className="list-group list-group-flush">
    {/* <li className="list-group-item" {...techniques.diciplineName[0]}>Cras justo odio</li>
    <li className="list-group-item" {...techniques.techniqueName[0]}>Dapibus ac facilisis in</li>
    <li className="list-group-item" {...techniques.learned[0]}>rgdgaergth</li> */}
  </ul>
  <div className="card-body">
  {/* <Link href={"/" }className="card-Link">Card Link</Link>
    <Link href={"/"} className="card-Link">Another Link</Link> */}
  </div>
</div>
    )) : <h1>No move found</h1>}
        

    {/* <div className="card">
      <img className="card-top" src="..." alt="Card  cap"/>
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
    </div>


    <div className="card">
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
    );
};

export default Technique; 