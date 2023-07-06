import React, {useState, useEffect} from 'react';
import { styled } from 'styled-components';
import { fontSizeSmText, fontSizeLgText, secondaryColor, textColorRemark } from '../../constants'
import { Formik, Form, Field, ErrorMessage,  } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material/';
import { Element } from 'react-scroll';
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubmitNotification from '../SubmitNotification';

const GlobalStyle = createGlobalStyle`
  .hvr-underline-from-center::before {
    background-color: ${secondaryColor};
  }
`;

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
    padding-top: 25px;
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
    useEffect(() => {
      AOS.init();
    }, []);
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const showSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
      }
    const submitData = async (values, { resetForm }) => {
      try {
        const response = await fetch('https://formspree.io/f/moqoaovw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (response.ok) {
          showSnackbar("Formulario enviado correctamente");
          resetForm();
        } else {
          showSnackbar("Error al enviar el formulario");
        }

      } catch (error) {
        console.log('Error al enviar el formulario:', error);
      }
    };

    return (
      <ContactMeContainer name="Contacto">
        <ContactMeTitle data-aos="fade-up">Contacto</ContactMeTitle>
        <ContactMeSubtitle data-aos="fade-down">
          Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.
        </ContactMeSubtitle>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={submitData}
        >
          <Form style={{ maxWidth: 500, padding: '0 20px', overflowX: 'hidden' }}>
            <Field
              name="name"
              as={TextField}
              label="Nombre"
              variant="outlined"
              autoComplete="off"
              fullWidth
              margin="normal"
              sx={{ background: '#F5F5F5' }}
              data-aos="fade-left"
              data-aos-duration="500"
            />
  
            <Field
              name="email"
              as={TextField}
              label="Correo electrónico"
              variant="outlined"
              autoComplete="off"
              fullWidth
              sx={{ background: '#F5F5F5' }}
              margin="normal"
              data-aos="fade-right"
              data-aos-duration="500"
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
              margin="normal"
              sx={{ background: '#F5F5F5' }}
              data-aos="fade-left"
              data-aos-duration="500"
            />
            <GlobalStyle />
            <Button
              data-aos="fade-right"
              data-aos-duration="500"
              className="hvr-underline-from-center"
              type="submit"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#2157F2', borderRadius: '6px', marginTop: '23px', textTransform: 'capitalize' }}
            >
              Enviar
            </Button>
          </Form>
        </Formik>
        <SubmitNotification snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} snackbarMessage={snackbarMessage}/>
      </ContactMeContainer>
    );
  };

export default ContactMe