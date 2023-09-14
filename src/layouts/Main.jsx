import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar';
import Footer from '../Footer';

export default class  extends Component {
  render() {
    return (
      <>
<Navbar/>

<Outlet/>
<Footer/>

      </>
    )
  }
}
