import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

export default function DefaultText({children, style}) {
    return (
        <Text style={[styles.defaultText, style]}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    defaultText: {
        color: Colors.accent400, 
        fontSize: 16
    }
});