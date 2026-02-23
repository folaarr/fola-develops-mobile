import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import InputSection from "./InputSection";
import Button from "./Button";
import * as Linking from 'expo-linking';

export default function LoginForm() {
    async function openLinkHandler() {
        await Linking.openURL('https://foladevelops.onrender.com/sign-up');
    };

    return (
        <View style={styles.loginView}>
            <InputSection name='Email' />
            <InputSection name='Password' secure />
            <View style={styles.prompt}>
                <Text style={styles.noAccount}>No account? </Text>
                <Pressable onPress={openLinkHandler}>
                    <Text style={styles.link}>Sign up on website</Text>
                </Pressable>
            </View>
            <Button name='Log In' />
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
    noAccount: {
        color: Colors.accent400,
        fontFamily: 'noto-sans-bold'
    }, 
    link: {
        color: Colors.pink,
        fontFamily: 'noto-sans-bold', 
        textDecorationLine: 'underline'
    }
});