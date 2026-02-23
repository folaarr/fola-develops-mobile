import { ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/LoginForm";

export default function LoginScreen() {
    return (
        <ImageBackground source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1771852394/formal-meeting_rsmhyt.jpg'}} style={styles.imageBackground}>
            <View style={styles.formCard}>
                <LoginForm />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1
    }, 
    formCard: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
});