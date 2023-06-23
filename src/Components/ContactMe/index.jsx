import React from 'react';
import { styled } from 'styled-components';
import { fontSizeSmText, fontSizeLgText, secondaryColor, textColorRemark } from '../../constants'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material/';
import { Element } from 'react-scroll';

const ContactMeContainer = styled(Element).attrs(() => ({
    as: 'section',
  }))`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-color: ${secondaryColor};
    padding: 15px;
    padding-top: 75px;
`
const ContactMeTitle = styled.h2`
    font-size: ${fontSizeLgText};
    font-weight: 500;
    color: ${textColorRemark};
`
const ContactMeSubtitle = styled.h3`
    font-size: ${fontSizeSmText};
    font-weight: 400;
    color: ${textColorRemark};
    text-align: justify;
    max-width: 500px;
`
const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
    message: Yup.string().required('El mensaje es obligatorio'),
  });

const ContactMe = () => {
    const formik = useFormik({
        initialValues: { name: '', email: '', message: '' },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          // Lógica para manejar el envío del formulario
          console.log(values);
        },
      });
      
  return (
    <ContactMeContainer name="Contacto">
        <ContactMeTitle>Contacto</ContactMeTitle>
        <ContactMeSubtitle>Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.</ContactMeSubtitle>
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
            // Lógica para manejar el envío del formulario
            console.log(values);
            }}
        >
            <Form style={{maxWidth: 500}}>
                {/* Campos del formulario */}
                <Field
                    name="name"
                    as={TextField}
                    label="Nombre"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    error={formik.touched.name && !!formik.errors.name}
                    helperText={formik.touched.name && formik.errors.name}
                    margin="normal"
                    sx={{background: "#F5F5F5"}}
                    />

                <Field
                    name="email"
                    as={TextField}
                    label="Correo electrónico"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    sx={{background: "#F5F5F5"}}
                    error={formik.touched.email && !!formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                    margin="normal"
                />
                <Field
                    name="message"
                    as={TextField}
                    label="Mensaje"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    multiline
                    rows={4}
                    error={formik.touched.message && !!formik.errors.message}
                    helperText={formik.touched.message && formik.errors.message}
                    margin="normal"
                    sx={{background: "#F5F5F5"}}
                />
                <Button type="submit" variant="contained" color="primary" sx={{backgroundColor: "#2157F2", borderRadius: "6px", marginTop:"23px" }}>
                Enviar
                </Button>
            </Form>
        </Formik>


    </ContactMeContainer>
  )
}

export default ContactMe