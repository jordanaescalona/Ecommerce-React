import cart from "./assets/cart.png";


const CartWidget = () => {
    return (
        <div className="has-text-link">
            <img src={cart} alt="cart-widget" style={{ width: "50px" }}  />
            0
        </div>

    );
}

export default CartWidget;