import { Image, StyleSheet, Text } from "react-native";
import BackgroundImageView from "../components/BackgroundImageView";
import LoadingOverlay from "../components/LoadingOverlay";
import DefaultText from "../components/DefaultText";
import { ImageStrings } from "../constants/image-strings";
import { useContext, useEffect, useState } from "react";
import { getPictureURL } from "../utils/http";
import { AuthContext } from "../store/auth-context";

export default function ProfilePictureScreen() {
    const [imageString, setImageString] = useState()

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function getPicture(token) {
            const feedback = await getPictureURL(token);
            setImageString(feedback.imageURL);
        }
        getPicture(authCtx.token);
    }, []);

    return (
        <BackgroundImageView source={{uri: ImageStrings.operator}} style={styles.holder}>
            <Image source={{uri: !!imageString && imageString}} style={styles.image} />
        </BackgroundImageView>
    );
}

const styles = StyleSheet.create({
    holder: {
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    image: {
        width: 200, 
        height: 200, 
        borderRadius: 16
    }
})