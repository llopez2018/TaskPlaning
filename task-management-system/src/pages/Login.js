import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { GlobalStyles } from '../path/to/GlobalStyles'; // Reemplaza '../path/to/GlobalStyles' con la ruta correcta

const Login = () => {
    return (
        <>
            <GlobalStyles /> {/* Agrega los estilos globales */}
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    // Lógica de inicio de sesión
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default Login;