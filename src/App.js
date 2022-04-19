
import './App.css';
import Card from './components/Card/Card';
import img from "./imgs/icon.png";
import Main from './main/Main';
import Form from './components/Form/Form';
import TextTitles from './components/Text-titles/TextTitles';
import DivBar from './components/DivBar/DivBar';

function App() {

  return (
    <> 
  
      <Main>
      <div className='d-flex justify-content-around mt-4 '>
      <TextTitles claseCont={"cont-title"} img={img} titulo="Ingresá tu producto al mundo digítal" h1={"Creamos tu tienda online"} h4=" Digitalizá tu marca en muy simples pasos con diseño a tu medida."/>
      <Form formclass={"regForm"} text1={"Nombre"} text2={"Email"} text3={"Contraseña"} checkboxP={"¿Aceptas los T&C del servicio?"} btnclass={"btn btn-info text-light"} btnText="Registrarse" />
      </div>
      <DivBar Title1={"+300 🌐"} p1={"Webs activas."} Title2={"4.9 ⭐"} p2={"Valoraciones positivas."} Title3={"100% 📱"} p3={"Adaptable a todos los dispositivos."}/>
     {/* <Card titulo={"Primer Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-warning"} botonText={"Enviar"} />
      <Card titulo={"Segunda Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-danger"} botonText={"Info"} />
      <Card className={"d-flex justify-content-center"} titulo={"Tercera Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-info"} botonText={"Comprar"} />
    */}
    </Main>
    </>
  );
}

export default App;
