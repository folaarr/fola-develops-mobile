import { StyleSheet, View } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function IconButton({name, size, color, style}) {
    return (
        <View style={style}>
            <SimpleLineIcons name={name} size={size} color={color} />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {

    }
});

