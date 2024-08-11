import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg headerColor">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Trend Loom</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
          <ul className="dropdown-menu" aria-labelledby="shopDropdown">
            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
            <li><a className="dropdown-item" href="#">Men</a></li>
            <li><a className="dropdown-item" href="#">Women</a></li>
            <li><a className="dropdown-item" href="#">Kids</a></li>
            <li><a className="dropdown-item" href="#">Accessories</a></li>
            <li><a className="dropdown-item" href="#">Sale</a></li>
          </ul>
        </li>
        <li className="nav-item"><a className="nav-link" href="#product">Collections</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Lookbook</a></li>
        <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
        <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Account</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Cart</a></li>
      </ul>
    </div>
  </div>
</nav>


   </>
  )
}

export default Header