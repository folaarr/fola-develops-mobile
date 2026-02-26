import { StyleSheet, Text } from "react-native";
import BackgroundImageView from "../components/BackgroundImageView";
import LoadingOverlay from "../components/LoadingOverlay";
import DefaultText from "../components/DefaultText";
import { ImageStrings } from "../constants/image-strings";
import { useEffect } from "react";

export default function ProfilePictureScreen() {
    useEffect(() => {}, []);

    return (
        <BackgroundImageView source={{uri: ImageStrings.operator}} style={styles.holder}>

        </BackgroundImageView>
    );
}

const styles = StyleSheet.create({
    holder: {

    }
})