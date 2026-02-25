import { ImageBackground, StyleSheet, View } from "react-native";
import OutlinedButton from "../components/OutlinedButton";
import { Colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import BackgroundImageView from "../components/BackgroundImageView";

export default function CategoriesScreen() {
    const navigation = useNavigation();

    return (
        <BackgroundImageView style={styles.imageBackground} source={{uri: 'https://res.cloudinary.com/foladevelops/image/upload/v1772024627/using-gadgets_jgikxb.jpg'}}>
            <OutlinedButton 
                name='E-store' 
                icon={{name: 'cart-variant', size: 16, color: Colors.accent400}} 
                onPress={() => {navigation.navigate('ECommerceSCreen')}} 
            />
            <OutlinedButton 
                name='AI app' 
                icon={{name: 'robot-outline', size: 16, color: Colors.accent400}} 
                onPress={() => {navigation.navigate('AIAppScreen')}}  
            />
        </BackgroundImageView>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
});