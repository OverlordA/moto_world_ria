import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    email: string;
    password: string;
}

const Login: React.FC =() => {

    const submitLogin = (form: FormValues) => {
        console.log('form w ', form);
    };
    const initialValues: FormValues = {
        email: '',
        password: '',
    };
    const validationScheme = Yup.object({
        email: Yup
            .string()
            .nullable()
            .required("This field is required !")
            .email(),
        password: Yup.string().nullable().required("This field is required !")
    });

    return <View>
        <Text> Login </Text>
        <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={submitLogin}>
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View>
                    { errors.email ? <Text style={styles.errorMessage}>{errors.email}</Text>:<Text/>}
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    { errors.password ? <Text style={styles.errorMessage}>{errors.password}</Text>:<Text/>}
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    </View>
};

const styles = StyleSheet.create({
    errorMessage: {
        color: '#ff0019'
    }
});

export default Login;
