import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarHidden: true,
        }}>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ animation: 'ios' }} />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{ animation: 'ios' }} />
        <Stack.Screen
          name='Tab'
          component={TabNavigator}
          options={{ animation: 'ios' }} />
        <Stack.Screen
          name='MovieDetails'
          component={MovieDetailsScreen}
          options={{ animation: 'ios' }} />
        <Stack.Screen
          name='SeatBooking'
          component={SeatBookingScreen}
          options={{ animation: 'ios' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
