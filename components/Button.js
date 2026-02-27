import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function Button({name, onPress, viewStyle, textStyle}) {
    return(
        <Pressable style={({pressed}) => [styles.pressable, pressed && styles.pressed]} onPress={onPress} >
            <View style={[styles.view, viewStyle]}>
                <Text style={[styles.text, textStyle]}>{name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        marginTop: 8
    },
    pressed: {
        opacity: 0.35
    },
    view: {
        maxWidth: 75, 
        backgroundColor: Colors.blueButton,
        alignItems: 'center', 
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 5
    }, 
    text: {
        color: Colors.accent400,
        fontSize: 16
    }
});