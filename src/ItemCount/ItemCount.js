import { useState } from "react";

const ItemCount = ({stock,initial,onAdd})=>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () =>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="box has-text-centered m-5">
            <div className="level">
                <button onClick={decrement} className="button is-danger level-item is-small" style={{width:"auto"}}>-</button>
                <p className="level-item is-size-4">Cantidad: {quantity}</p>
                <button onClick={increment} className="button is-success level-item is-small" style={{width:"auto"}}>+</button>
            </div>
            <div class="mt-3">
                <button onClick={() => onAdd(quantity)} disabled={!stock} className="button is-primary" style={{width:"auto"}}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;