import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import {Formik} from "formik";
import * as Yup from 'yup';
import RegistrationFormValues from '../../interfaces/forms/RegistationFormValues'
import {registrationUser} from "../../api";

const Registration: React.FC = () => {
    const initialValues: RegistrationFormValues = {
        email: '',
        password: '',
        confirmPassword: ''
    };
    const validationSchema = Yup.object({
       email:  Yup
           .string()
           .nullable()
           .required("This field is required !")
           .email(),
       password: Yup.string().nullable().required(),
       confirmPassword: Yup.string().nullable().required(),
    });


    const submitRegForm = async (form: RegistrationFormValues) => {
        await registrationUser(form);
    };


    return <View>
        <Text> Registration: </Text>
        <Formik
            initialValues={initialValues}
            onSubmit={submitRegForm}
            validationSchema={validationSchema}
        >
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
                    { errors.confirmPassword ? <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>:<Text/>}
                    <TextInput
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    </View>
};

const styles = StyleSheet.create({
   errorMessage: {
       color: '#ff171c'
   }
});

export default Registration;
