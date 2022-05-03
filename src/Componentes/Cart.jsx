import React from "react";

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import {CartContext} from "../Context/CartContext"
import { useState,useContext } from "react";
import {collection,addDoc, getFirestore} from "firebase/firestore"
import { useForm } from 'react-hook-form'



export  default function Cart() {

    const {cart,removeCart,buyAll,valorTotal,cantidadTotal} = useContext(CartContext)
    // const {register, errors, handleSubmit} = useForm();

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
    const handleClick= () => {
        terminarCompra()
        buyAll()
        
    }
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <>
      <Container className="contenedor-inputs">

        <p className="texto-carrito">CARRITO</p>
        
            <Table className="table"  bordered hover variant="dark">
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
      
        <p className="texto-datos">Ingresa tus datos para finalizar la compra</p>

            <Form className="form-contacto">
                <ul>
                    <li>
                        <input 
                        placeholder={"Nombre y apellido"}  
                        type={"text"} 
                        value={name}
                        name={"nombre"}
                        onChange={(e) => {setName(e.currentTarget.value);}}/>
                    </li>
                    <li>
                        <input 
                        placeholder={"E-mail"} 
                        type={"email"} 
                        value={email}
                        onChange={(e) => {setEmail(e.currentTarget.value);}}/>
                    </li>
                    <li>
                        <input 
                        placeholder={"Numero de Celular"} 
                        type={"number"} 
                        value={phone}
                        onChange={(e) => {setPhone(e.currentTarget.value);}}/>
                    </li>
                    <li>
                    <Button variant="outline-success" onClick={handleClick}>Finalizar Comprar</Button>
                    </li>
                </ul>
            </Form>

      </Container>

    </>
    )
   
   
}