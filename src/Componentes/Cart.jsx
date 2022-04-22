import React from "react";

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import {useState,useContext} from "react";
import {CartContext} from "../Context/CartContext"

export  default function Cart() {

    const {removeCart} = useContext(CartContext)

    const {buyAll} = useContext(CartContext)

    const {cart}=useContext(CartContext)

    return(
        <>
       <h1>ESTAS EN EL CARRITO</h1>
      <Container>  
       <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                
                <th>Cantidad</th>
                <th>Nombre del auto</th>
                <th>Precio</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
      </Container> 
                    <Form className="d-flex">
                        <Button variant="outline-danger" onClick={removeCart} >X</Button>
                        <Button variant="outline-success"onClick={buyAll}>Finalizar Comprar</Button>
                    </Form>
        </>
    )
   
    );
}