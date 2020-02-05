import React from 'react';
import { View, Text } from 'react-native';
import {Form} from "formik";

interface FormValues {
    email: string;
    password: string;
}

const Login: React.FC =() => {
    return <View>
        <Text> Login </Text>
        <Form>
        </Form>
    </View>
};
export default Login;
