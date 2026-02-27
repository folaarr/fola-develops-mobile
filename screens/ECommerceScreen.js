import { StyleSheet, Text } from "react-native";
import DefaultText from "../components/DefaultText";
import BackgroundImageView from "../components/BackgroundImageView";
import DemoPrompt from "../components/DemoPrompt";

export default function ECommerceScreen() {
    return (
        <BackgroundImageView style={styles.imageBackground} source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1772024627/using-gadgets_jgikxb.jpg'}}>
            {/* <DefaultText>E-Co</DefaultText> */}
            <DemoPrompt></DemoPrompt>
        </BackgroundImageView>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})