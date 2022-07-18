import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import React from "react";
import EditProfileScreen from "../screens/EditProfileScreen";

const Stack = createNativeStackNavigator();


const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen}/>
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;