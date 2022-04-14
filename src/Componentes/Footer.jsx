import React from "react";

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

import IconQ from "./IconQ";

export  default function Footer() {

    return(
        <>
      <Navbar className="contenedor-footer" >
        <Container className="hijo-footer">
          <Navbar.Brand className="icono-footer">
           <IconQ/>ueen of wheels
          </Navbar.Brand>
        </Container>
      </Navbar>
            
        </>
    )
}