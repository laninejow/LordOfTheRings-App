import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Characters from '../screens/Characters';
import Timeline from '../screens/Timeline';
import QuoteFinder from '../screens/QuoteFinder';
import DaysBeforeDays from '../screens/DayBeforeDays';
import YearsOfTheTree from '../screens/YearsOfTheTree';
import FirstAge from '../screens/FirstAge';
import SecondAge from '../screens/SecondAge';
import ThirdAge from '../screens/ThirdAge';
import FourthAge from '../screens/FourthAge';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import SplashScreen from '../screens/SplashScreen';
import CharacterDetails from '../screens/CharacterDetails';
import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../assets/home-icon.png');
          } else if (route.name === 'Characters') {
            iconName = require('../assets/character-icon.png');
          } else if (route.name === 'Timeline') {
            iconName = require('../assets/timeline-icon.png');
          } else if (route.name === 'QuoteFinder') {
            iconName = require('../assets/quote-icon.png');
          }

          return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
        },
        tabBarActiveTintColor: '#8E5D52',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Characters" 
        component={Characters} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Timeline" 
        component={Timeline} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="QuoteFinder" 
        component={QuoteFinder} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="DaysBeforeDays" component={DaysBeforeDays} options={{ headerShown: false }} />
        <Stack.Screen name="YearsOfTheTree" component={YearsOfTheTree} options={{ headerShown: false }} />
        <Stack.Screen name="FirstAge" component={FirstAge} options={{ headerShown: false }} />
        <Stack.Screen name="SecondAge" component={SecondAge} options={{ headerShown: false }} />
        <Stack.Screen name="ThirdAge" component={ThirdAge} options={{ headerShown: false }} />
        <Stack.Screen name="FourthAge" component={FourthAge} options={{ headerShown: false }} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
