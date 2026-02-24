import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import InputSection from "./InputSection";
import Button from "./Button";
import * as Linking from 'expo-linking';
import { login } from "../utils/auth";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    const [error, setError] = useState(false)

    async function openLinkHandler() {
        await Linking.openURL('https://foladevelops.onrender.com/sign-up');
    };

    async function loginHandler() {
        const feedback = await login(email, password);
        if (feedback.errorResponse) {
            setError(true);
            setErrorMessage(feedback.message);
        };
    };

    function changeEmailHandler(input) {
        setEmail(input);
    };

    function changePasswordHandler(input) {
        setError(false);
        setPassword(input);
    };

    return (
        <>
            <View style={styles.loginView}>
                <InputSection name='Email' onChangeText={changeEmailHandler} value={email} />
                <InputSection name='Password' secure onChangeText={changePasswordHandler} value={password} />
                <Pressable onPress={openLinkHandler}>
                    <Text style={styles.link}>No account? Sign up on website</Text>
                </Pressable>
                <Button name='Log In' onPress={loginHandler} />
            </View>
            {error && <Text style={styles.error}>{errorMessage}</Text>}
        </>
        
    );
};

const styles = StyleSheet.create({
    loginView: {
        minWidth: 200,
        borderWidth: 0.3,
        borderColor: Colors.accent400,
        borderRadius: 4,
        padding: 12
    }, 
    link: {
        color: Colors.accent400,
        fontFamily: 'noto-sans-bold', 
    },
    error: {
        color: Colors.error,
        fontFamily: 'noto-sans-bold', 
        marginTop: 30
    }
});