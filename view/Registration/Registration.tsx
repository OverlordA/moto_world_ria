import React from 'react';
import {View, Text } from "react-native";
import {Formik} from "formik";

interface RegistrationFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const Registration: React.FC = () => {
    const initialValues: RegistrationFormValues = {
        email: '',
        password: '',
        confirmPassword: ''
    };

    const submitRegForm = (form: RegistrationFormValues) => {

    };


    return <View>
        <Text> Registration: </Text>
        <Formik
            initialValues={initialValues}
            onSubmit={submitRegForm}
        >

        </Formik>
    </View>
};
export default Registration;
