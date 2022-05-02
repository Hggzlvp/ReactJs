import React from "react";

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import {CartContext} from "../Context/CartContext"
import { useState, useEffect,useContext } from "react";
import {collection,addDoc, getFirestore} from "firebase/firestore"



export  default function Cart() {

    const {cart,removeCart,buyAll,valorTotal,cantidadTotal} = useContext(CartContext)

    const [name, setName] =   useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

   function  terminarCompra () {

    const db = getFirestore();
    const Ventas =collection(db,"Ventas");
    

    //example buyer
    let buyer = {
        buyer: { name, phone, email },
        items: cart,
        total: valorTotal(),
    }; 

    addDoc(Ventas,buyer).then(({id}) => {
        console.log(id)
    })

    alert("Tu pedido se ha registrado" + "\n"+ name +"\n"+ email +"\n" +phone);
    }

    // useEffect(() => {
    //     console.log(name, email, phone);
    //     }, [name, email, phone]);
    
    
    
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
      <Container>

        <p>Pone tus datos para finalizar la compra</p>
        <Form>
            
            <input placeholder={"Nombre y apellido"}  type={"text"} value={name}
            onChange={(e) => {setName(e.currentTarget.value);}}/>

            <input placeholder={"E-mail"} type={"email"} value={email}
            onChange={(e) => {setEmail(e.currentTarget.value);}}/>

            <input placeholder={"Numero de Celular"} type={"number"} value={phone}
            onChange={(e) => {setPhone(e.currentTarget.value);}}/>
        </Form>
      </Container>
                    <Form className="d-flex">
                        <Button variant="outline-success" onClick={terminarCompra}>Finalizar Comprar</Button>
                    </Form>
        </>
    )
   
   
}