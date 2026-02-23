import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
import InputSection from "./InputSection";
import Button from "./Button";

export default function LoginForm() {
    return (
        <View style={styles.loginView}>
            <InputSection name='Email' />
            <InputSection name='Password' secure />
            <Button name='Log In' />
        </View>
    );
};

const styles = StyleSheet.create({
    loginView: {
        minWidth: 200,
        borderWidth: 0.3,
        borderColor: Colors.accent400,
        padding: 12
    }
});