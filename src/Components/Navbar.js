import React from 'react'
import logo from "../IMG/carserv-logo.png";


function Navbar() {
  return (
    <>
      <div className="container-fluid shadow p-0 m-0 bg-white" >
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img src={logo} alt="logo" style={{ height: "14vh", width: "17vh" }} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ml-auto p-4 p-lg-0 ">
              <a href="Home" className="nav-item nav-link">Home</a>
              <a href="Technicians" className="nav-item nav-link">Technicians</a>
              <a href="Service" className="nav-item nav-link">Services</a>
              <a href="Contact" className="nav-item nav-link">Contact</a>
              <a href="About" className="nav-item nav-link">About</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar