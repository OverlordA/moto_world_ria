import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LoginFormValues from "../../interfaces/forms/LoginFormValues";
import {loginUser} from "../../api";

interface LoginProps {
    navigation: any,
}

const Login: React.FC<LoginProps> = ({navigation}) => {

    const submitLogin = async (form: LoginFormValues) => {
       await loginUser(form);
    };
    const toRegistration = async () => {
      navigation.navigate('Registration')
    };
    const initialValues: LoginFormValues = {
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
        <Text onPress={toRegistration}>To Registration </Text>
    </View>
};

const styles = StyleSheet.create({
    errorMessage: {
        color: '#ff0019'
    }
});

export default Login;
