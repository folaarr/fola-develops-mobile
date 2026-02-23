import { StyleSheet, Text, View, TextInput } from "react-native";
import { Colors } from "../constants/colors";

export default function InputSection({name, secure}) {
    return (
        <>
            <Text style={styles.text}>{name}</Text>
            <TextInput secureTextEntry={secure} style={styles.textInput} />
        </>
    );
};

const styles = StyleSheet.create({ 
    text: {
        color: Colors.accent400, 
        fontFamily: 'noto-sans'
    }, 
    textInput: {
        color: Colors.accent400, 
        borderWidth: 0.3, 
        borderColor: Colors.accent400, 
        fontFamily: 'noto-sans'
    }
});