import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [categoryId])

    return (

        <div class="container">
            <h2 className="title">{greeting}</h2>
            <div class="columns is-multiline">               
                <ItemList products={products} />                
            </div>
            
        </div>



    )
}

export default ItemListContainer;