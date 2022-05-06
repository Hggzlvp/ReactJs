import React from "react";
import {Link} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import NavDropdown from "react-bootstrap/NavDropdown"
import Offcanvas from "react-bootstrap/Offcanvas"

import CartWidget from "./CartWidget";
import IconQ from "./IconQ";



export  default function NavBar() {

    return(
        <>
        
    <Navbar className="contenedor-navbar" bg="light" expand={false}>
        <Container className="hijo-navbar" fluid>
            <Navbar.Brand className="icono-navbar">{<IconQ/>}ueen of wheels</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="padre-desplegable"
            >
            <Offcanvas.Header className="cabezera-desplegable">

            <Offcanvas.Title id="offcanvasNavbarLabel" className="estilos-desplegable"><p className="estilos-desplegable">Estilos de autos</p></Offcanvas.Title>
    
            </Offcanvas.Header><hr />
            
            <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">

                    <Link className="linksNav" to={"/"}> Todos </Link>
                    <Link className="linksNav" to={"/Deportivo"}> Deportivos </Link>
                    <Link className="linksNav" to={"/Familiar"}> Familiares </Link>

                </Nav>
                
                <Offcanvas.Title id="offcanvasNavbarLabel" className="palabra-carrito">Carrito</Offcanvas.Title>
                <hr />
                    <Nav className="carrito-desplegable">
                        <div className="carrito-desplegable" ><Link to={"/cart"}> { <CartWidget/> } </Link></div>
                    </Nav>
                      
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
        </>
    );
}