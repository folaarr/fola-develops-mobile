import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import LoginScreen from './screens/LoginScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';
import { Colors } from './constants/colors';

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
          title: 'Log In'
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
          title: 'Categories Screen'
        }}
      />
    </StackNavigator>
  );
};

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
    <NavigationContainer>
      <StatusBar style="light" />
      <AuthenticationStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
