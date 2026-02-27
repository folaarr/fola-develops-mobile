import { BlurView } from "expo-blur";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";
import DefaultText from "./DefaultText";
import Button from "./Button";
import { useContext } from "react";
import { AutofillContext } from "../store/autofill-context";

export default function DemoPrompt() {
    const autofillCtx = useContext(AutofillContext);

    function autofillDetails() {
        autofillCtx.setEmail('view@foladevelops.onrender.com');
        autofillCtx.setPassword('View1234');
        autofillCtx.setAutoFill(true);
    };

    return (
        <BlurView intensity={80} tint="dark" style={styles.blurView}>
            <DefaultText style={styles.contentText}>Want to preview but don’t want to sign up?</DefaultText>
            <Button 
                name='Use demo account details' 
                viewStyle={styles.buttonView} 
                textStyle={styles.buttonText} 
                onPress={autofillDetails} 
            />
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
    contentText: {
        fontFamily: 'noto-sans-bold',
        textAlign: 'center',
    }, 
    buttonView: {
        // backgroundColor: '#1a8754', 
        maxWidth: 'auto', 
        paddingHorizontal: 16
    }, 
    buttonText: {
        // color: Colors.primary400, 
        fontFamily: 'noto-sans-bold',
    }
});