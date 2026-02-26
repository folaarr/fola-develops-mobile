import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IoniconButton({name, onPress, icon}) {
    return(
        <Pressable style={({pressed}) => [styles.pressable, pressed && styles.pressed]} onPress={onPress} >
            <View style={styles.view}>
                <Ionicons {...icon} />
                <Text style={styles.text}>{name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        width: 145, 
        marginTop: 8
    },
    pressed: {
        opacity: 0.35
    },
    view: {
        borderWidth: 0.3,
        borderColor: Colors.accent400,
        alignItems: 'center', 
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 5, 
        flexDirection: 'row', 
        gap: 6, 
        justifyContent: 'center'
    }, 
    text: {
        color: Colors.accent400,
        fontSize: 16, 
    }
});