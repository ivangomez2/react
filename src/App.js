import "./App.css";
import CartContext from "./context/CartContext";
import GlobalStateContext from "./context/GlobalStateContext";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <>
    <GlobalStateContext>
      <CartContext>
    <Rutas/>
    </CartContext>
    </GlobalStateContext>
    </>
  );
}

export default App;
