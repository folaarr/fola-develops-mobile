import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function Button({name}) {
    return(
        <Pressable style={({pressed}) => [styles.pressable, pressed && styles.pressed]}>
            <View style={styles.view}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        maxWidth: 75, 
        marginTop: 8
    },
    pressed: {
        opacity: 0.35
    },
    view: {
        backgroundColor: Colors.blueButton,
        alignItems: 'center', 
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 5
    }, 
    text: {
        color: Colors.accent400
    }
});