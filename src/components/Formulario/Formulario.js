import "./Formulario.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";

const Formulario = () => {
  const [formEnviado, setFormEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
		  descripcion:""
        }}
        validate={(values) => {
          let errores = {};

          // Validacion para los nombres
          if (!values.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validacion para los correos
          if (!values.correo) {
            errores.correo = "Por favor ingresa un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros y caracteres";
          } 
		  else if (values.descripcion.length <=20){
			errores.descripcion = "El mensaje debe ser de por lo menos 20 caracteres";
		  }

          return errores;
        }}
        onSubmit={(values,{resetForm}) => {
			resetForm();
          setFormEnviado(true);
          setTimeout(() => {
            setFormEnviado(false);
          }, 3000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                name="correo"
                placeholder="correo@correo.com"
                id="correo"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>

            <div>
			<label htmlFor="descripcion">Mensaje</label>
              <Field
                className="formulario-descripcion"
                name="descripcion"
                as="textarea"
				id="descripcion"
                placeholder="Publica aquí tu mensaje"
              />
			   <ErrorMessage
                name="descripcion"
                component={() => <div className="error">{errors.descripcion}</div>}
              />
            </div>

            <button type="submit">Enviar</button>
            {formEnviado === true ? (
              <p className="exito">Formulario enviado con éxito!</p>
            ) : (
              ""
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
