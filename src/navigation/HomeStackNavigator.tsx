import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Image, View } from "react-native";
import logo from "../assets/images/logo.png";
import React from "react";

const Stack = createNativeStackNavigator();


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}/>
      <Stack.Screen name="UserProfile" component={ProfileScreen} options={{title:'Profile'}}/>
    </Stack.Navigator>
  )
}

const HeaderTitle = () => {
  return (
    <View>
      <Image source={logo} resizeMode="contain" style={{ width: 150, height: 40}} />
    </View>
  )
}
export default HomeStackNavigator;