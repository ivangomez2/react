import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { useState } from "react";

const ContactUs = () => {
  const form = useRef();
  const [envio, setEnvio] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(envio);

    emailjs
      .sendForm(
        "service_gnaygob",
        "template_prv11tb",
        form.current,
        "LzGo5aMLcr8ZSb-ek"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          alert("error");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactCont mt-5">
      {envio == false ? (
        <form className="d-flex flex-column" ref={form} onSubmit={sendEmail}>
          <h3 className="text-center mb-3">Contacto</h3>
          <label>Nombre</label>
          <input
            placeholder="Ingresa tu Nombre..."
            type="text"
            name="user_name"
          />
          <label>Apellido</label>
          <input placeholder="Ingresa tu Apellido..." type="text" />
          <label>Email</label>
          <input
            placeholder="Ingresa tu Email..."
            type="email"
            id="email"
            name="from_name"
          />
          <label>Mensaje</label>
          <textarea placeholder="Ingresa tu mensaje..." name="message" />
          <button
            className="mt-3 btn"
            type="submit"
            value="Send"
            onClick={() => {
              setEnvio(true);
            }}
          >
            Enviar{" "}
          </button>
        </form>
      ) : (
        <>
          <h4 style={{ color: "#0697bb", textAlign: "center" }}>
            {" "}
            Gracias por contactarte,Recibirás un mensaje a la brevedad.
          </h4>
          <button
            className="btn btn-info w-100"
            onClick={() => {
              setEnvio(false);
            }}>
            Consultar nuevamente
          </button>
        </>
      )}
    </div>
  );
};

export default ContactUs;
