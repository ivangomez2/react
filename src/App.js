import "./App.css";
import iconBlack from "./imgs/iconBlack.png";
import Main from "./main/Main";
import Form from "./components/Form/Form";
import TextTitles from "./components/Text-titles/TextTitles";
import DivBar from "./components/DivBar/DivBar";
import SectionImg from "./components/SectionImg/SectionImg";
import opiniones from "../src/imgs/opiniones.png";
import Card from "./components/Card/Card";
import opinionesDos from"../src/imgs/haceteConocer.png"
import pago from "../src/imgs/pago.jpg"
function App() {
  return (
    <>
      <Main>
        <div className="d-flex justify-content-around mt-4 header">
          <TextTitles
            claseCont={"cont-title"}
            img={iconBlack}
            titulo="Ingresá tu producto al mundo digítal"
            h1={"Creamos tu tienda online"}
            h4=" Digitalizá tu marca en muy simples pasos con diseño a tu medida."
          />
          <Form
            formclass={"regForm"}
            text1={"Nombre"}
            text2={"Email"}
            text3={"Contraseña"}
            checkboxP={"¿Aceptas los T&C del servicio?"}
            btnclass={"btn btn-black text-light"}
            btnText="Registrarse"
          />
        </div>
        <DivBar
          Title1={"+300 💻"}
          p1={"Webs activas."}
          Title2={"4.9 ⭐"}
          p2={"Valoraciones positivas."}
          Title3={"100% 📴"}
          p3={"Adaptable a todos los dispositivos."}
        />
        <div >
          <SectionImg
          img1={opiniones}
           
            pClass={"SectionImg__p"}
            title={"Elegí el diseño que se adapte a tus necesidades"}
            p={
              "Más de 100 diseños unicos para generar un producto exclusivo,También realizamos diseños personalizados para darle mas caracter a tu marca."
            }
            btnClass={"btn btn-dark text-light"}
            button={"Escoge tu plan"}
           
          />
          
            <SectionImg
              imgSectImg={"CardHorizontal"}
              pClass="SectionImg__p"
              title={"Cobrar nunca fue tan fácil"}
              p={
                "Soporte para mas de +60 medios de pago incluidos MercadoPago - Tarjetas de credito/debito - BTC."
              }
              btnClass={"btn btn-dark text-light w-25"}
              button={"+ INFO"}
              img1={opinionesDos}
            />
  
       
        </div>

        <DivBar
          Title1={"1"}
          p1={"Registrate"}
          Title2={"4.9 ⭐"}
          p2={"Valoraciones positivas."}
          Title3={"100% 📱"}
          p3={"Adaptable a todos los dispositivos."}
        />
        <div className="d-flex justify-content-around">
          <Card
            Stock={3}
            titulo={"Tienda FullGold"}
            imagen={"https://picsum.photos/200/200"}
            parrafo={"Paquete premium ideal para grandes empresas."}
            boton={" btn btn-warning"}
            botonText={"Agregar"}
          />
          <Card
            Stock={5}
            titulo={"Tienda FullSilver"}
            imagen={"https://picsum.photos/200/200"}
            parrafo={"Diseñado para negocios medianos."}
            boton={" btn btn-danger"}
            botonText={"Agregar"}
          />
          <Card
            Stock={2}
            titulo={"Tienda StarterPack"}
            imagen={"https://picsum.photos/200/200"}
            parrafo={"Desde 0, asistencia para poner tu negocio en pie."}
            boton={" btn btn-info"}
            botonText={"Agregar"}
          />
        </div>
      </Main>
    </>
  );
}

export default App;
