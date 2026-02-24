import { Pressable, StyleSheet, View } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function IconButton({name, size, color, style, onPress}) {
    return (
        <Pressable style={({pressed}) => [style, pressed && styles.pressed]} onPress={onPress}>
            <SimpleLineIcons name={name} size={size} color={color} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
});

