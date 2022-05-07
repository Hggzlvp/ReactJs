import React,{useEffect,useState} from "react";
import ItemsList from "./ItemsList";
import {useParams} from "react-router-dom"

import {collection,getDocs, getFirestore,query,where} from "firebase/firestore"

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { NewtonsCradle } from '@uiball/loaders'



function ItemsListContainer(){


    const [Item, setItem] = useState([]);
    const {category}= useParams();


    useEffect (() => {

        const db = getFirestore();

        let productosRef =(collection(db,"productos"));
        if (category) productosRef = query(productosRef,where("estilo","==",category));


        getDocs(productosRef).then((res)=> {
            setItem(res.docs.map((item)=> ({id:item.id, ...item.data() })));
        })

    },[category])

    return (

        <Container className="contenedor-autos">
        
            <Row xs={1} md={2}   className="g-4">

            {
            Item.length > 0 ?
            <ItemsList productos={Item}/>
            :
            <div className="divLoader">
            <NewtonsCradle 
            size={70}
            speed={1.4} 
            color="black" 
            />
            </div>
            }

            </Row>
        
        </Container>
    )
}
export default ItemsListContainer; 