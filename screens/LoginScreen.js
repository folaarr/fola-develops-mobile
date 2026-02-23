import { ImageBackground, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

export default function LoginScreen() {
    return (
        <>
            <ImageBackground source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1771852394/formal-meeting_rsmhyt.jpg'}} style={styles.imageBackground}>
            
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1
    }
});