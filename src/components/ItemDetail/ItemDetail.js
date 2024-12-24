import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (

        <div className="card">
            <div className="card-content">
                <div className="columns is-vcentered">
                    {/* Columna para la imagen */}
                    <div className="column is-one-third">
                        <figure className="image is-4by3">
                            <img src={img} alt={name} />
                        </figure>
                    </div>

                    {/* Columna para los datos */}
                    <div className="column">
                        <div className="content">
                            <h2 className="title is-4">{name}</h2>
                            <br/>
                            <p className="subtitle is-6">Categoría: {category}</p>
                            <p>Descripción: {description}</p>
                            <p className="has-text-weight-bold">Precio: ${price}</p>

                            <ItemCount
                                initial={1}
                                stock={stock}
                                onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail;