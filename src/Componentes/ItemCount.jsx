import React, {useState} from "react";

const ItemContador=({inicial,stock}) => {

    const [contador,setContador] = useState(inicial);

    const aumentar = () =>{
        if (contador < stock){
            setContador(contador + 1)
        } 
    };

    const restar = () =>{
        if (contador > inicial){
            setContador(contador - 1)
        }
    };


    return (
        <>
            <div className="contador">

                <div classname="contador-">{contador}</div>
                <button className="aumentar" onClick={aumentar}> + </button>
                <button className="restar"   onClick={restar}  > - </button>

            </div>
        
        </>
    );
}
export default ItemContador;