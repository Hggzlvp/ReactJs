import React from "react";
import CartWidget from "./CartWidget";

export  default function NavBar() {

    return(
        <>
  <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
    <a className="navbar-brand" >GamingStyle</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

      <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">

        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >Inicio</a>
              </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <CartWidget/>
              </a>
              <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                <li><a className="dropdown-item" >Producto 1</a></li>
                <li><a className="dropdown-item" >Producto 2</a></li>
                <li><a className="dropdown-item" >Producto 3</a></li>
              </ul>
            </li>
        </ul>
        <button className="btn btn-outline-success" type="submit">Comprar</button>

      </div>

    </div>
    </div>
  </nav>
        </>
    );
}