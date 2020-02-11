import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
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
