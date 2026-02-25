import { ImageBackground, StyleSheet, View } from "react-native";
import OutlinedButton from "../components/OutlinedButton";
import { Colors } from "../constants/colors";

export default function CategoriesScreen() {
    return (
        <ImageBackground style={styles.imageBackground} source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1772024627/using-gadgets_jgikxb.jpg'}}>
            <OutlinedButton name='E-store' icon={{name: 'cart-variant', size: 16, color: Colors.accent400}} />
            <OutlinedButton name='AI app' icon={{name: 'robot-outline', size: 16, color: Colors.accent400}}  />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
});