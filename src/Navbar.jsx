import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (<>

<nav className="navbar navbar-expand-lg   fixed-top   py-4">
  <div className="container text-uppercase">
    <Link className="navbar-brand" to="/Front">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-underline ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link scorllto" to="./About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link scorllto" to="./Product">portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link scorllto" to="./contact">contact</Link>
        </li>



      </ul>
    </div>
  </div>
</nav>



  </>

    )
  }
}
