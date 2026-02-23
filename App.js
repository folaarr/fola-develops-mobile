import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

function StackNavigator({children}) {
  return (
    <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center', 
          headerStyle: {backgroundColor: "#2b3035"},
          headerTintColor: "#E7F2E4",
          contentStyle: {
            backgroundColor: "#2b3035"
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
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
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
