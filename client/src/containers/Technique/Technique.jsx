// import React, { Component } from 'react';
// import React from 'react';
// import VidCard from "./VidCard/VidCard"
// import {Link} from 'react-router-dom';
import { Link } from "react-router-dom";
// import axios from "axios";
import {  useState } from 'react';
// import { response } from 'express';
import "./Technique.css"
const Technique = () => {
    const [techniques, setTechniques] = useState([])
// const [diciplineName, techniqueName, difficulty, enhances] = useState([

// ]);

// useEffect(() => {
//     axios.get("/api/technique").then((response) => {
//         console.log(response.data);
//         setTechniques(response.data);
//     });
// }, []);




    return (
      <div id="not12">
      <>
      <div className="container">
      <nav className="navbar navbar-dark bg-dark">
      <Link to="/last">
      <button className="btn btn-outline-success" type="button">Nutrition</button>
      </Link>
      <Link to="/dash">
    <button className="btn btn-sm btn-outline-secondary" type="button">saved videos</button>
    </Link>
</nav>
        <div className="row">
          <div className="col-md-12">

          <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4"><strong> Learn, Teach, GO! </strong></h1>
    <p className="lead">by_onThere.</p>
  </div>
</div>
   

    {techniques.length ? techniques.map(weapon => (
  <div className="card">
    <video classname="ra" width="920" height="440"  id="video">
              <source src="" type="video/mp4"/>
            </video>
 
  <div className="card-body">
    <h5 className="card-title" key={weapon._id.Technique}><strong>Dicipline Name:_</strong>{weapon.diciplineName}</h5>
    <p className="card-text"></p>
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item"><strong>Technique Name:_</strong>{weapon.techniqueName}</li>
    <li className="list-group-item"><strong>Advantages:_</strong>{weapon.enhances}</li>
 
    <li className="list-group-item" >{weapon.learnd}</li>
  </ul>
  <div className="card-body">
 
  <button type="button" className="btn btn-dark">Save</button>
  </div>
</div>
    )) : <h1>No move found</h1>}
        

    <div className="card">
    <video className="ra" width="920" height="440" controls id="video">
              <source src="" type="video/mp4"/>
            </video>
      <div className="card-body">
        <h5 className="card-title"><strong>Dicipline Name:_</strong>Freestyle</h5>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Tecqnique Name:_</strong>Overhnd Right</li>
        <li className="list-group-item"><strong>Advantages:_</strong>generating power</li>
        <li className="list-group-item"><strong>Learnd:_</strong>False</li>
      </ul>
      <div className="card-body">
      {/* <Link href={"/" }className="card-Link">Card Link</Link> */}
        {/* <Link href={"/"} className="card-Link">Another Link</Link> */}
      </div>
    </div>


    <div className="card">
    <video className="ra" width="920" height="440" controls id="video">
              <source src="" type="video/mp4"/>
            </video>
      <div className="card-body">
        <h5 className="card-title"><strong>Dicipline Name:_</strong>Counter Fighting</h5>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Tecqnique Name:_</strong>Right Cross</li>
        <li className="list-group-item"><strong>Advantages:_</strong>Counter</li>
        <li className="list-group-item"><strong>Learnd:_</strong>False</li>
      </ul>
      <div className="card-body">
      {/* <Link href={"/" }className="card-Link">Card Link</Link> */}
        {/* <Link href={"/"} className="card-Link">Another Link</Link> */}
      </div>
    </div>

    <div className="card">
    <video className="ra" width="920" height="440" controls id="video">
              <source src="" type="video/mp4"/>
            </video>
      <div className="card-body">
        <h5 className="card-title"><strong>Dicipline Name:_</strong>Boxing</h5>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Tecqnique Name:_</strong>Rare Hook</li>
        <li className="list-group-item"><strong>Advantages:_</strong>Higher connect percentage</li>
        <li className="list-group-item"><strong>Learnd:_</strong>False</li>
      </ul>
      <div className="card-body">
      {/* <Link href={"/" }className="card-Link">Card Link</Link> */}
        {/* <Link href={"/"} className="card-Link">Another Link</Link> */}
      </div>
    </div>

    <div className="card">
    <video className="ra" width="920" height="440" controls id="video">
              <source src="" type="video/mp4"/>
            </video>
      <div className="card-body">
        <h5 className="card-title"><strong>Dicipline Name:_</strong>Yoga</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Tecqnique Name:_</strong>Camol pose</li>
        <li className="list-group-item"><strong>benifits:_</strong>knees, flexability</li>
        <li className="list-group-item"><strong>Learnd:_</strong>False</li>
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