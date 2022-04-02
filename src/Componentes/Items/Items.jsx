import React from "react"

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import ItemCount from '../ItemCount';


function Items(id,nombre,imagen,stock){
    return (
        <Container key={id}>
            <Row xs={1} md={2} className="g-4">

                {/* {Array.from({ length: 1 }).map((_, idx) => ( */}

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={imagen} />
                            <Card.Body>
                            <Card.Title>{nombre}</Card.Title>
                            <Card.Text>
                            <ButtonGroup className="mb-2">

                                <ItemCount/>
                               
                            </ButtonGroup> 
                             <p>Stock disponible:{10}</p>
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            </Row>
        </Container>
    )
}
export default Items