import React from 'react'
import './navbar.css'
export default function Nav() {
  return (
  <>
<div id="navbar">
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>DreamTrek</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <div className="navul">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
          <a className=" navbar_a" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className=" navbar_a" aria-current="page" href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a className=" navbar_a" aria-current="page" href="/about">About Tripyy</a>
        </li>
        <li className="nav-item">
          <a className=" navbar_a" aria-current="page" href="/contact">Contact Us</a>
        </li>
       
      </ul>
        </div>
      
    </div>
  </div>
</nav>
</div>
  </>
  )
}
