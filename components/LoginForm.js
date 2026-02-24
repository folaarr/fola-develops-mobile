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

    async function openLinkHandler() {
        await Linking.openURL('https://foladevelops.onrender.com/sign-up');
    };

    async function loginHandler() {
        console.log('I was pressed');
        const tokens = await login(email, password);
        console.log(tokens);
    };

    function changeEmailHandler(input) {
        setEmail(input);
    };

    function changePasswordHandler(input) {
        setPassword(input);
    };

    return (
        <View style={styles.loginView}>
            <InputSection name='Email' onChangeText={changeEmailHandler} value={email} />
            <InputSection name='Password' secure onChangeText={changePasswordHandler} value={password} />
            <View style={styles.prompt}>
                <Text style={styles.noAccount}> </Text>
                <Pressable onPress={openLinkHandler}>
                    <Text style={styles.link}>No account? Sign up on website</Text>
                </Pressable>
            </View>
            <Button name='Log In' onPress={loginHandler} />
        </View>
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
    prompt: {
        flexDirection: 'row',
    }, 
    link: {
        color: Colors.accent400,
        fontFamily: 'noto-sans-bold', 
    }
});