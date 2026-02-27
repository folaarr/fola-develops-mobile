import { ImageBackground, StyleSheet, View } from "react-native";
import OutlinedButton from "../components/OutlinedButton";
import { Colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import BackgroundImageView from "../components/BackgroundImageView";
import IoniconButton from "../components/IoniconButton";

export default function CategoriesScreen() {
    const navigation = useNavigation();

    return (
        <BackgroundImageView style={styles.imageBackground} source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1772024627/using-gadgets_jgikxb.jpg'}}>
            {/* <View style={styles.view}> */}
                <IoniconButton 
                    name='Profile picture' 
                    icon={{name: 'person-circle-outline', size: 16, color: Colors.accent400}} 
                    onPress={() => {navigation.navigate('ProfilePictureScreen')}}  
                />
                {/* <OutlinedButton 
                    name='E-store' 
                    icon={{name: 'cart-variant', size: 16, color: Colors.accent400}} 
                    // onPress={() => {navigation.navigate('ECommerceSCreen')}} 
                />
            </View>
            <View style={styles.view}>
                <OutlinedButton 
                    name='AI app' 
                    icon={{name: 'robot-outline', size: 16, color: Colors.accent400}} 
                    // onPress={() => {navigation.navigate('AIAppScreen')}}  
                />
                <OutlinedButton 
                    name='Add a note' 
                    icon={{name: 'plus', size: 16, color: Colors.accent400}} 
                    onPress={() => {}} 
                />
            </View> */}
        </BackgroundImageView>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        alignItems: 'center',
        justifyContent: 'center', 
        gap: 9
    }, 
    view: {
        flexDirection: 'row',
        gap: 17,
    }
});