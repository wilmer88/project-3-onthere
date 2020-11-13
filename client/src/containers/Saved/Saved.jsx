import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Saved = () => {
    return (
<>
<h1>heyy</h1>
      <div class="card">
      <img class="card-img-top" src="..." alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
      <Link href={"/" }class="card-Link">Card Link</Link>
        <Link href={"/"} class="card-Link">Another Link</Link>
      </div>
    </div>
      </>
    );
};

export default Saved;