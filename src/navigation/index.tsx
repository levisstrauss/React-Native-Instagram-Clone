import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// @ts-ignore
import logo from "../assets/images/logo.png";
import BottomTabNavigator from "./BottomTabNavigator";
import CommentsScreen from "../screens/CommentsScreen";
import { RootNavigator } from "./types";


const Stack = createNativeStackNavigator<RootNavigator>(); // { Navigator, Screen }

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}} />
        <Stack.Screen name="Comments" component={CommentsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;


