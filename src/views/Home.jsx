import React from 'react'

import iconBlack from "../imgs/iconBlack.png"

import ItemListContainer from '../components/items/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import ImgTextCont from '../components/SectTextImg/ImgTextCont';
import DivBar from '../components/DivBar/DivBar';
import TextTitles from '../components/Text-titles/TextTitles';
import Form from '../components/Form/Form';




const Home = () => {
  return (
    <>
     
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
            FormTitle={"Registro"}
            FormTitleClass={"FormTitleClass"}
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
          p1Mobile={"Webs activas"}
          Title2={"4.9 ⭐"}
          p2Mobile={"Valoraciones."}
          p2={"Valoraciones positivas."}
          Title3={"100% 📴"}
          p3={"Adaptable a todos los dispositivos."}
          p3Mobile={"PC-Mobile"}
        />
        <div>
          <ImgTextCont />
        </div>

        <DivBar
          Title1={"1"}
          p1={"Registrate"}
          Title2={"2"}
          p2={"Suscribite"}
          Title3={"3"}
          p3={"Vende online"}
          TitleClass={"display-1 DivBarTitle"}
          PClass={"h4"}
        />

        <ItemListContainer />

      
    </>
  )
}

export default Home