import { StyleSheet, Text, View, TextInput } from "react-native";
import { Colors } from "../constants/colors";

export default function InputSection({name, secure}) {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{name}</Text>
            <TextInput secureTextEntry={secure} style={styles.textInput} selectionColor={Colors.accent400} />
        </View>
    );
};

const styles = StyleSheet.create({ 
    view: {
        marginBottom: 8,
    },
    text: {
        color: Colors.accent400, 
        fontFamily: 'noto-sans', 
        marginBottom: 4,
        fontSize: 16
    }, 
    textInput: {
        color: Colors.accent400, 
        borderWidth: 0.3, 
        borderColor: Colors.accent400, 
        fontFamily: 'noto-sans', 
        paddingVertical: 6, 
        paddingHorizontal: 4,
        borderRadius: 4,
        fontSize: 16
    }
});