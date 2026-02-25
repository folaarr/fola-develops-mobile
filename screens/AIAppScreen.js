import { StyleSheet, Text } from "react-native";
import BackgroundImageView from "../components/BackgroundImageView";
import LoadingOverlay from "../components/LoadingOverlay";
import DefaultText from "../components/DefaultText";

export default function AIAppScreen() {
    return (
        <BackgroundImageView source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1772030201/keyboard_tzi476.jpg'}} style={styles.holder}>
            <LoadingOverlay message='Build in progress...' />
        </BackgroundImageView>
    );
}

const styles = StyleSheet.create({
    holder: {
        justifyContent: 'center', 
        alignItems: 'center'
    }
})