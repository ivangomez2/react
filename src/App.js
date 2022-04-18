
import './App.css';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer"
import Main from './main/Main';
import Form from './components/Form/Form';
import img from "./imgs/icon.png"
function App() {

  return (
    <> 
  
      <Main>
      <div className='d-flex justify-content-evenly'>
      <Card titulo={"Primer Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-warning"} botonText={"Enviar"} />
      <Card titulo={"Segunda Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-danger"} botonText={"Info"} />
      <Card className={"d-flex justify-content-center"} titulo={"Tercera Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-info"} botonText={"Comprar"} />
      </div>
    </Main>
    </>
  );
}

export default App;
