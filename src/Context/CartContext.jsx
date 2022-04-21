import React, {useState,createContext} from "react";
import Cart from "../Componentes/Cart";

export const CartContext= createContext(null);

const CartContextProvider = ({children}) => {

    const [cart,setCart] =useState([])

    const addCart= (item,cantidad) => {
        if(cart.some(element=> element.id ===item.id)) {

            let index= cart.findIndex (element => element.id === item.id)
            let product= cart[index];
            product.cantidad = product.cantidad + cantidad;

            const newCart =[...cart];
            newCart.splice (index,1,product);

            setCart ([...newCart]);
            console.log(cart);
        
    } else {
        let product = {...item,cantidad};
        setCart([...Cart,product]); 
    }};
    
    const deleteCartById = (id) => {

        let index= newCart.findIndex (element => element.id === id);

        const newCart =[...cart];
        newCart.splice (index,1);

        setCart([...newCart]);
    }

    return (

        <CartContext.Provider value={[cart , addCart , deleteCartById ]}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContextProvider;