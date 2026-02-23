import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";

export default function LoginForm() {
    return (
        <View style={styles.loginView}>
            <TextInput style={{width: 300, height: 100, color: Colors.accent400}} secureTextEntry />
        </View>
    );
};

const styles = StyleSheet.create({
    loginView: {
        borderWidth: 0.3,
        borderColor: Colors.accent400,
    }
});