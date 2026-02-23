import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
import InputSection from "./InputSection";

export default function LoginForm() {
    return (
        <View style={styles.loginView}>
            <InputSection name='Email' />
        </View>
    );
};

const styles = StyleSheet.create({
    loginView: {
        borderWidth: 0.3,
        borderColor: Colors.accent400,
    }
});