import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostUploadScreen from "../screens/PostUploadScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../theme/colors";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.black,
      }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={size} color={color}/>
            ),
          }} />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{tabBarIcon: ({color, size}) => (
              <MaterialIcons name="search" size={size} color={color}/>
            ),
          }} />
        <Tab.Screen
          name="Upload"
          component={PostUploadScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="plus-circle-outline"
                size={size}
                color={color}
              />
            ),
          }} />
        <Tab.Screen
          name="Notifications"
          component={HomeScreen}
          options={{tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="heart-outline" size={size} color={color}/>
            ),
          }} />
        <Tab.Screen
          name="MyProfile"
          component={ProfileStackNavigator}
          options={{
            headerShown: false,
              tabBarIcon: ({color, size}) => (
              <FontAwesome name="user-circle-o" size={size} color={color}/>
            ),
          }} />
      </Tab.Navigator>
  )
}

export default BottomTabNavigator;