import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
/* import ItemCount from "./ItemCount/ItemCount"; */
//importamos bulma
import "bulma/css/bulma.css";
//react-router-dom
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App(){
    return(
    
        <div className="container has-text-centered">
            
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />`
                    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>           
        </div>
    );
}

export default App;
