import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <>
      <div className="products">
      <div className="text-center pt-4" style={{color: 'rgb(44, 62, 80)'}}><h2 className="text-uppercase mt-3 fs-1 fw-bolder">portfolio component</h2><div className="d-flex align-items-center justify-content-center mb-3"><div  className="line me-3" style={{backgroundColor: 'rgb(44, 62, 80)'}} /><i  className="fa-solid fa-star" /><div  className="line ms-3" style={{backgroundColor: 'rgb(44, 62, 80)'}} /></div></div>

<div  className="container py-2"><div  className="row g-5"><div  className="col-lg-4 col-md-6"><div  className="rounded-3 overflow-hidden position-relative"><img  alt className="w-100 rounded-3" src="img/1.png" /><div  className="layer-product oduct position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  className="text-white fa-solid fa-plus fa-6x" /></div></div></div><div  className="col-lg-4 col-md-6"><div  className="rounded-3 overflow-hidden position-relative"><img  alt className="w-100 rounded-3" src="img/2.png" /><div  className="layer-product position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  className="text-white fa-solid fa-plus fa-6x" /></div></div></div><div  className="col-lg-4 col-md-6"><div  className="rounded-3 overflow-hidden position-relative"><img  alt className="w-100 rounded-3" src="img/3.png" /><div  className="layer-product position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  className="text-white fa-solid fa-plus fa-6x" /></div></div></div><div  className="col-lg-4 col-md-6"><div  className="rounded-3 overflow-hidden position-relative"><img  alt className="w-100 rounded-3" src="img/1.png" /><div  className="layer-product position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  className="text-white fa-solid fa-plus fa-6x" /></div></div></div><div  className="col-lg-4 col-md-6"><div  className="rounded-3 overflow-hidden position-relative"><img  alt className="w-100 rounded-3" src="img/2.png" /><div  className="layer-product position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  className="text-white fa-solid fa-plus fa-6x" /></div></div></div><div  className="col-lg-4 col-md-6"><div  className="rounded-3 overflow-hidden position-relative"><img  alt className="w-100 rounded-3" src="img/3.png" /><div  className="layer-product position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  className="text-white fa-solid fa-plus fa-6x" /></div></div></div>{/**/}</div></div>

      </div>




      </>
    )
  }
}
