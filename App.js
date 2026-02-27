import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import LoginScreen from './screens/LoginScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useContext, useEffect } from 'react';
import { Colors } from './constants/colors';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import IconButton from './components/IconButton';
import ECommerceScreen from './screens/ECommerceScreen';
import AIAppScreen from './screens/AIAppScreen';
import ProfilePictureScreen from './screens/ProfilePictureScreen';
import AutofillContextProvider from './store/autofill-context';

const Stack = createNativeStackNavigator();

function StackNavigator({children}) {
  return (
    <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center', 
          headerStyle: {
            backgroundColor: Colors.primary400
          },
          headerTitleStyle: {
            fontFamily: "noto-sans"
          },
          headerTintColor: Colors.accent400,
          contentStyle: {
            backgroundColor: Colors.primary400
          }
        }}
      >
      {children}
    </Stack.Navigator>
  );
}

function AuthenticationStack() {
  return (
    <StackNavigator>
      <Stack.Screen 
        name='LoginScreen' 
        component={LoginScreen} 
        options={{
          title: 'Log In',
          headerShown: false
        }}  
      />
    </StackNavigator>
  );
};

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <StackNavigator>
      <Stack.Screen 
        name='CategoriesScreen'
        component={CategoriesScreen} 
        options={{
          title: 'Categories Screen', 
          headerRight: ({tintColor}) => (
            <IconButton 
              name='logout' 
              size={22} 
              color={tintColor} 
              style={styles.iconButton}
              onPress={() => {authCtx.logout()}}
            />
          )
        }}
      />
      <Stack.Screen 
        name='ProfilePictureScreen' 
        component={ProfilePictureScreen} 
        options={{
          title: 'Profile picture'
        }} 
      />
      <Stack.Screen 
        name='ECommerceSCreen' 
        component={ECommerceScreen} 
        options={{
          title: 'E-commerce screen'
        }} 
      />
      <Stack.Screen 
        name='AIAppScreen' 
        component={AIAppScreen} 
        options={{
          title: 'AI app screen'
        }} 
      />
    </StackNavigator>
  );
};

  function Root() {
    const authCtx = useContext(AuthContext);

    if (!authCtx.isAuthenticated) {
      return <AuthenticationStack />
    } else if (authCtx.isAuthenticated) {
      return <AuthenticatedStack />
    }
  }

export default function App() {
  const [loaded, error] = useFonts({
    "noto-sans": require("./assets/fonts/NotoSans.ttf"),
    "noto-sans-bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "dancing-script": require("./assets/fonts/DancingScript.ttf"),
  });
  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AutofillContextProvider>
      <AuthContextProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Root />
        </NavigationContainer>
      </AuthContextProvider>
    </AutofillContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  iconButton: {
    paddingRight: 7
  }
});
