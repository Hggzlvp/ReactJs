import React from "react"
import {Link} from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import ItemCount from '../ItemCount';



function Items({id,nombre,imagen,stock,precio,estilo}){
    return ( 
       
                    <Col >
                        <Card >
                            <Card.Img className="imagen-car" variant="top" src={imagen} />
                            <Card.Body>
                            <Card.Title>{nombre}</Card.Title>

                            <Card.Text>
                                <h3>{precio}</h3>
                                <ButtonGroup className="mb-2">
                                    <ItemCount inicial={1} stock={stock} />
                                </ButtonGroup> 
                                    <h5> #{estilo} </h5>
                                <p> Stock Disponible: {stock}</p>
                             </Card.Text>
                             <Button variant="outline-dark" > <Link to={`/detalles/${id}`}> Ver Detalles </Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                
    )
}
export default Items