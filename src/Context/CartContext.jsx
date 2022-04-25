import React, {useState,createContext} from "react";

export const CartContext= createContext(null);

const CartContextProvider = ({children}) => {

    const [cart,setCart] =useState([])
    
    

    const addCart = (item) => {
        
        const indexProd = cart.findIndex((prod) => prod.id === item.id);
        if (indexProd !== -1) {
            const newCart = [...cart];
            newCart[indexProd].cantidad = newCart[indexProd].cantidad + item.cantidad;
            setCart(newCart);
        } else {
            setCart([...cart, item]);
        }
        // console.log(item);
    };

    // const valorTotal = () => {
    //     cart.reduce((total, item) => total + item.cantidad*item.precio, 0)
    // }

    
    

    const removeCart = (item) => {
        setCart(cart.filter((prod) => prod.id !== item.id));
        console.log("Item Borrado")
    }

    const buyAll = () => setCart([]);


    return (

        <CartContext.Provider value={{cart , addCart , removeCart , buyAll}}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContextProvider;