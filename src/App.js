import  { Component } from 'react';
import  Navbar  from './Navbar';
import Front from './Front';
import Footer from './Footer';
import About from './About';
import Contact from './contact';
import Product from './Product';
import { RouterProvider ,Routes,createBrowserRouter, createHashRouter } from 'react-router-dom';
import Main from './layouts/Main';





export default class App extends Component{
  routes=createHashRouter([


    { path:'/',element: <Main/> , children:
  [
    { path:'About',element: <About/>},
    { path:'contact',element: <Contact/>},
    { path:'Front',element: <Front/>},
    { path:'product',element: <Product/>}

  ]}


   ])

render(){
  return <>



<RouterProvider router={this.routes}/>






  </>
}
}
