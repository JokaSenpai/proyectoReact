import "./FormularioCompra.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Swal from 'sweetalert2'
import { CartContext } from "../../components/Context/CartContext";


const FormularioCompra = () => {
  const [formEnviado, setFormEnviado] = useState(false);
  const {clearCart} = useContext(CartContext);

  return (
      
    <>
    <h2 className="h2-compra"> Llena tus datos personales para proseguir con la compras</h2>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
		      notas:""
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

          return errores;
        }}
        onSubmit={async (values,{resetForm}) => {
          const docRef = await addDoc(collection(db, "purchases"), {
            name: values.nombre,
            email: values.correo,
            notes: values.notas
          });
          Swal.fire({
            icon: 'success',
            title: 'Compra realizada!',
            text: `El ID de su compra es: ${docRef.id}`,
            timer: 5500
          }) 
          clearCart();
			resetForm();
          setFormEnviado(true);
        }}
      >
        {({ errors }) => (
            <div className="contenedor">
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre y Apellido</label>
              <Field
                type="text"
                name="nombre"
                placeholder="Juan Perez"
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
			<label htmlFor="descripcion">Notas adicionales para la compra</label>
              <Field
                className="formulario-descripcion"
                name="notas"
                as="textarea"
				id="descripcion"
                placeholder="Publica aquí tu nota"
              />
			   <ErrorMessage
                name="notas"
                component={() => <div className="error">{errors.notas}</div>}
              />
            </div>

            <button type="submit">Enviar</button>
            
          </Form>
          </div>
        )}
      </Formik>
    </>
  );
};


export default FormularioCompra;