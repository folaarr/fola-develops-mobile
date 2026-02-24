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
            />
          )
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
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Root />
      </NavigationContainer>
    </AuthContextProvider>
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
