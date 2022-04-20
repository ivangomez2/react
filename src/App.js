
import './App.css';
import Card from './components/Card/Card';
import icon from "./imgs/icon.png";
import iconBlack from "./imgs/iconBlack.png";
import Main from './main/Main';
import Form from './components/Form/Form';
import TextTitles from './components/Text-titles/TextTitles';
import DivBar from './components/DivBar/DivBar';
import SectionImg from './components/SectionImg/SectionImg';
import opiniones from "../src/imgs/opiniones.png"
import pagosImg from "../src/imgs/pago.jpg"

function App() {

  return (
    <> 
  
      <Main>
      <div className='d-flex justify-content-around mt-4 '>
      <TextTitles claseCont={"cont-title"} img={iconBlack} titulo="Ingresá tu producto al mundo digítal" h1={"Creamos tu tienda online"} h4=" Digitalizá tu marca en muy simples pasos con diseño a tu medida."/>
      <Form formclass={"regForm"} text1={"Nombre"} text2={"Email"} text3={"Contraseña"} checkboxP={"¿Aceptas los T&C del servicio?"} btnclass={"btn btn-black text-light"} btnText="Registrarse" />
      </div>
      <DivBar Title1={"+300 💻"} p1={"Webs activas."} Title2={"4.9 ⭐"} p2={"Valoraciones positivas."} Title3={"100% 📴"} p3={"Adaptable a todos los dispositivos."}/>
     <div>
       <SectionImg img2={opiniones} title={"Elegí el diseño que se adapte a tus necesidades"} p={"Más de 100 diseños unicos para generar un producto exclusivo,También realizamos diseños personalizados para darle mas caracter a tu marca."} btnClass={"btn btn-dark text-light"} button={"Escoge tu plan"} />
       <SectionImg img1={pagosImg} title={"Cobrar nunca fue tan fácil"} p={"Soporte para mas de +60 medios de pago incluidos MercadoPago - Tarjetas de credito/debito - BTC. Que el medio de pago no sea excusa para tus clientes, Rapido - seguro y sin vueltas."} btnClass={"btn btn-dark text-light"} button={"+ INFO"}/>
     </div>
     <DivBar Title1={"1"} p1={"Registrate"} Title2={"4.9 ⭐"} p2={"Valoraciones positivas."} Title3={"100% 📱"} p3={"Adaptable a todos los dispositivos."}/>
     {/* <Card titulo={"Primer Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-warning"} botonText={"Enviar"} />
      <Card titulo={"Segunda Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-danger"} botonText={"Info"} />
      <Card className={"d-flex justify-content-center"} titulo={"Tercera Card"} imagen={"https://picsum.photos/200/300"} parrafo={"parrafo Card"} boton={" btn btn-info"} botonText={"Comprar"} />
    */}
    </Main>
    </>
  );
}

export default App;
