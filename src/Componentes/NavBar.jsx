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
        
    <Navbar bg="light" expand={false}>
        <Container fluid>
            <Navbar.Brand >{<IconQ/>}ueen Of Wheels</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header closeButton>

            <Offcanvas.Title id="offcanvasNavbarLabel">Estilos de autos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link ><Link to={"/Deportivos"}> Deportivos </Link></Nav.Link>
                <Nav.Link ><Link to={"/Familiares"}> Familiares </Link></Nav.Link>
                

           <Offcanvas.Title id="offcanvasNavbarLabel">Carro</Offcanvas.Title>
                <NavDropdown title={<CartWidget/>} id="offcanvasNavbarDropdown">
                    <NavDropdown.Item >Producto 1 </NavDropdown.Item>
                    <NavDropdown.Item >Producto 2</NavDropdown.Item>
                    <NavDropdown.Item >Producto 3</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <Button variant="outline-success">Finalizar Comprar</Button>
                </Form>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
        </>
    );
}