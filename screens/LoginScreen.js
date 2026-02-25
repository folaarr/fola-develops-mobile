import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Dimensions } from "react-native";
import LoginForm from "../components/LoginForm";

export default function LoginScreen() {
    const height = Dimensions.get('window').height;

    return (
        <ImageBackground source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1771935222/formal-meeting_hyzuwp.jpg'}} style={styles.imageBackground}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollViewContainer}>
                <KeyboardAvoidingView style={styles.avoiding} behavior='position'>
                      <LoginForm />
                </KeyboardAvoidingView>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1
    }, 
    scroll: {
        flex: 1,
    },
    scrollViewContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    avoiding: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    formCard: {
        flex: 1,
    }
});