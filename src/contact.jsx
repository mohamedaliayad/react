import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <>

<div style={{marginTop: 92, minHeight: 'calc(100vh - 112px)'}}><div  className="mb-4"><div  className="pt-3 conatiner"><div  className="text-center pt-4" style={{color: 'rgb(44, 62, 80)'}}><h2  className="text-uppercase mb-3 fs-1 fw-bolder">conatct section</h2><div  className="d-flex align-items-center justify-content-center mb-3"><div  className="line me-3" style={{backgroundColor: 'rgb(44, 62, 80)'}} /><i  className="fa-solid fa-star" /><div  className="line ms-3" style={{backgroundColor: 'rgb(44, 62, 80)'}} /></div></div><form  className="w-50 p-3 mx-auto mt-5 "><label htmlFor="userName" className="position-relative top-0 __top"> </label><input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative " /><label htmlFor="userAge" className="position-relative top-0 __top"> </label><input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative" /><label htmlFor="userEmail" className="position-relative top-0 __top"> </label><input  id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative " /><label htmlFor="userPassword" className="position-relative top-0 __top"> </label><input  id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative " /><button  className="btn mt-4 text-white" style={{backgroundColor: '#1abc9c'}}> send Message </button></form></div></div></div>







</>
    )
  }
}
