import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function LoadingOverlay({message}) {
    return (
        <View style={styles.view}>
            <Text>{message}</Text>
            <ActivityIndicator color={Colors.accent400} size='large' />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});