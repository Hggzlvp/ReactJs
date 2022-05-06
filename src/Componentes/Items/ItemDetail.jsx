import React from "react"
import {Link} from "react-router-dom";
import {useState} from "react";

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ItemCount from '../ItemCount';
import Button from "react-bootstrap/Button";




function ItemDetail ({producto})  {

    const [Number,setNumber] = useState(0)

    const agregarCarrito = (cantidad) =>(
        setNumber(cantidad)
    )
    // console.log(Number)
    
  
    return (
        <>
        <Container className="div-nombre">
            <h1 className="h1-nombre">Detalles del {producto.nombre}</h1>
        </Container>
        <Container>
        <Col >
            <Card>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>

                    <div className="texto-carta">

                         <h2 className="precio">{producto.precio} €</h2>

                        { 
                        Number <= 0 
                        ?
                        <ButtonGroup className="mb-2">
                            <ItemCount inicial={1} stock={producto.stock} prod={producto} agregarCarrito={agregarCarrito} />
                        </ButtonGroup> 
                        :
                        <ButtonGroup className="mb-2">
                            <Button variant="outline-dark" className="boton-agregar" > <Link to={"/cart"}>Ir al Carrito </Link></Button>
                        </ButtonGroup>
                        }

                        <p className="estilo"> #{producto.estilo} </p>
                        <p className="stock">  Stock Disponible: {producto.stock}</p>
                        
                        <Button variant="outline-dark" className="boton-volver" > <Link to={`/`}> Volver </Link></Button>
                    </div>

                </Card.Body>
            </Card>
         </Col>
         </Container>
        </>

    )
}
export default ItemDetail;