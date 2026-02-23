import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
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
        <Stack.Screen 
          name='CategoriesScreen'
          component={CategoriesScreen} 
          options={{
            title: 'Categories Screen'
          }}
        />
      </Stack.Navigator>
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
