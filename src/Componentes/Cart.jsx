import React from "react";

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import {useContext} from "react";
import {CartContext} from "../Context/CartContext"

export  default function Cart() {

    const {cart,removeCart,buyAll,valorTotal,cantidadTotal} = useContext(CartContext)
    console.log(cart)
    
    
    return(
        <>
      <Container className="div-nombre">
            <h1 className="h1-nombre">CARRITO</h1>
      </Container>
      <Container>  
       <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                
                <th>Cantidad</th>
                <th>Nombre del auto</th>
                <th>Precio</th>
                <th>Total</th>
                <th>Borrar</th>

                </tr>
            </thead>
            <tbody>
                {
                cart.length > 0 ? cart.map (item =>
                <tr>
                <td>{item.cantidad}</td>
                <td>{item.nombre}</td>
                <td>{item.precio} €</td>
                <td>{item.cantidad * parseInt(item.precio)} € </td>
                <td><Button variant="outline-danger" onClick={() => removeCart(item)} >X</Button></td>
                </tr>)
                :
                <tr>
                <td>vacio</td>
                <td>vacio</td>
                <td>vacio</td>
                <td>vacio</td>
                <td><Button variant="outline-danger" disabled >X</Button></td>
                </tr>
                }
            </tbody>
            <thead>
                <tr>
                
                <th>{cantidadTotal()}</th>
                <th>-</th>
                <th>Total</th>
                <th>{valorTotal()} €</th>
                <th>-</th>
                
                </tr>
            </thead>
        </Table>
      </Container> 
                    <Form className="d-flex">
                        <Button variant="outline-success"onClick={buyAll}>Finalizar Comprar</Button>
                    </Form>
        </>
    )
   
   
}