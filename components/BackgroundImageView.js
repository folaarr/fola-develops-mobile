import { ImageBackground, StyleSheet, Text } from "react-native";

export default function BackgroundImageView({children, source, style}) {
    return (
        <ImageBackground source={source} style={[styles.container, style]}>{children}</ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})