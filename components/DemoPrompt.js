import { BlurView } from "expo-blur";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";
import DefaultText from "./DefaultText";

export default function DemoPrompt() {
    return (
        <BlurView intensity={40} tint="dark" style={styles.blurView}>
            <DefaultText style={styles.text}>Want to preview but don’t want to sign up?</DefaultText>
        </BlurView>
    )
};

const styles = StyleSheet.create({
    blurView: {
        alignSelf: 'center',
        maxWidth: 280,
        paddingHorizontal: 10,
        paddingVertical: 20, 
        borderColor: Colors.accent400,
        borderWidth: 0.3, 
        borderRadius: 20, 
        overflow: 'hidden', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    text: {
        fontFamily: 'noto-sans-bold',
        textAlign: 'center',
    }
});