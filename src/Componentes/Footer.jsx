import React from "react";

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

import IconQ from "./IconQ";

export  default function Footer() {

    return(
        <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            h1
           <IconQ/>
          </Navbar.Brand>
        </Container>
      </Navbar>
            
        </>
    )
}