import React from "react"
import {Link} from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

import ItemCount from '../ItemCount';



function Items({id,nombre,imagen,stock,precio,estilo}){
    return (
        
        <Container>
        
            <Row xs={1} md={2}   className="g-4">
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={imagen} />
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
                
            </Row>
        
        </Container>
        
    )
}
export default Items