import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Dimensions } from "react-native";
import LoginForm from "../components/LoginForm";
import BackgroundImageView from "../components/BackgroundImageView";

export default function LoginScreen() {
    const height = Dimensions.get('window').height;

    return (
        <BackgroundImageView source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1771935222/formal-meeting_hyzuwp.jpg'}} style={styles.imageBackground}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollViewContainer}>
                <KeyboardAvoidingView style={styles.avoiding} behavior='position'>
                      <LoginForm />
                </KeyboardAvoidingView>
            </ScrollView>
        </BackgroundImageView>
    );
};

const styles = StyleSheet.create({
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