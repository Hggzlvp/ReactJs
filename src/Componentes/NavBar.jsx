import React from "react";
import CartWidget from "./CartWidget";

export  default function NavBar() {

    return(
        <>
            <nav class="navbar navbar-light bg-light fixed-top">
                <div class="container-fluid">
    <a class="navbar-brand" href="#">GamingStyle</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <CartWidget/>
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Producto 1</a></li>
              <li><a class="dropdown-item" href="#">Producto 2</a></li>
              <li><a class="dropdown-item" href="#">Producto 3</a></li>
            </ul>
          </li>
        </ul>

          
          <button class="btn btn-outline-success" type="submit">Comprar</button>

      </div>
    </div>
            </div>
            </nav>
        </>
    );
}