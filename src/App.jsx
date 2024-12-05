import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//importamos bulma
import "bulma/css/bulma.css";


function App(){
    return(
    
        <div className="container has-text-centered">
            <NavBar />
            <ItemListContainer greeting={'Bienvenidos!!'} />
        </div>
    );
}

export default App;
