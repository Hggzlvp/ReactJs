import React from "react"
import {Link} from "react-router-dom";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Items({id,nombre,imagen}){
    return ( 
       
                    <Col >
                        <Card >
                            <Card.Img className="imagen-car" variant="top" src={imagen} />
                            <Card.Body className="cuerpo-carta">
                            <Card.Title className="nombre-auto">{nombre}</Card.Title>

                            <Card.Text>
                                {/* <h3>{precio}</h3> */}
                                {/* <ButtonGroup className="mb-2">
                                    <ItemCount inicial={1} stock={stock} />
                                </ButtonGroup>  */}
                                    {/* <h5> #{estilo} </h5>
                                <p> Stock Disponible: {stock}</p> */}
                             </Card.Text>
                             <Button variant="outline-dark" className="boton-detalle" > <Link to={`/detalles/${id}`}> Ver Detalles </Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                
    )
}
export default Items