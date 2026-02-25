import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import DefaultText from "./DefaultText";

export default function LoadingOverlay({message, size}) {
    return (
        <View style={styles.view}>
            <DefaultText>{message}</DefaultText>
            <ActivityIndicator color={Colors.accent400} size={size} />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: 16
    }
});