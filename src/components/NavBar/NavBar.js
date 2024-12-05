import CartWidget from "../CartWidget/CartWidget";
const NavBar = () =>{
    return (
        <nav className="container mt-4">
            <h1 className="title has-text-danger p-5">Jordana Escalona Ecommerce</h1>
            <div>
                <button className="button is-primary m-3">Celulares</button>
                <button className="button is-primary m-3">Tablets</button>
                <button className="button is-primary m-3">Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;