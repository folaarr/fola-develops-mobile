import { Image, StyleSheet, Text } from "react-native";
import BackgroundImageView from "../components/BackgroundImageView";
import LoadingOverlay from "../components/LoadingOverlay";
import DefaultText from "../components/DefaultText";
import { ImageStrings } from "../constants/image-strings";
import { useContext, useEffect, useState } from "react";
import { getPictureURL } from "../utils/http";
import { AuthContext } from "../store/auth-context";

export default function ProfilePictureScreen() {
    const [imageString, setImageString] = useState('');
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function getPicture(token) {
            setIsAuthenticating(true);
            const feedback = await getPictureURL(token);
            setIsAuthenticating(false);
            setImageString(feedback.imageURL);
        }
        getPicture(authCtx.token);
    }, []);

    if (isAuthenticating) {
        return (
            <BackgroundImageView source={{uri: ImageStrings.operator}} style={styles.holder}>
                <LoadingOverlay message='Loading...' size='large' />
            </BackgroundImageView>
        );
    }

    return (
        <BackgroundImageView source={{uri: ImageStrings.operator}} style={styles.holder}>
            <Image source={!!imageString ? {uri: imageString}: null} style={styles.image} />
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