import CartWidget from "../CartWidget/CartWidget";
import { NavLink,Link } from "react-router-dom";

const NavBar = () =>{
    return (
        <nav className="container mt-4">
            <Link to="/">
                <h3 className="title has-text-danger p-5">Jordana Escalona Ecommerce</h3>
            </Link>            
            <div>
                <NavLink to={`/category/celular`} className={({isActive}) => `button is-primary m-3 ${isActive ? "ActiveOption":"Option"}`}>Celulares</NavLink>
                {/* <button className="button is-primary m-3">Celulares</button> */}
                <NavLink to={`/category/tablet`} className={({isActive}) => `button is-primary m-3 ${isActive ? "ActiveOption":"Option"}`}>Tablets</NavLink>
                <NavLink to={`/category/notebook`} className={({isActive}) => `button is-primary m-3 ${isActive ? "ActiveOption":"Option"}`}>Notebooks</NavLink>
                <CartWidget />
            </div>
            
        </nav>
    );
}

export default NavBar;