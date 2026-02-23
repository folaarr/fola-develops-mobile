import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function Button({name}) {
    return(
        <Pressable style={styles.pressable}>
            <View style={styles.view}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        maxWidth: 50
    },
    view: {
        backgroundColor: Colors.blueButton,
        width: 'auto', 
        alignItems: 'center'
    }, 
    text: {
        color: Colors.accent400
    }
});