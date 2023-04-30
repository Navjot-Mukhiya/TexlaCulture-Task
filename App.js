import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/home";
import MySpace from "./screens/mySpace";
import MyTeam from "./screens/myTeam";
import Settings from "./screens/Settings";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomepageOverview = () => {
  return (
    <BottomTabs.Navigator initialRouteName="My Space" screenOptions={
      {
        tabBarStyle: {height: 60},
        tabBarLabelStyle: {fontSize: 12, marginBottom: 6}, 
      }
    }>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="My Space"
        component={MySpace}
        options={{
          headerShown: true,
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: '#F2F1F1',
          },
          tabBarIcon: ({ color, size, focused }) => (
            <Image
            source={
              focused
                ? require("./assets/iphoneemoji2removebgpreview.png")
                : require("./assets/iphoneemoji2removebgpreview.png")
            }
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          ),
        }}
      />
      <BottomTabs.Screen
        name="My Team"
        component={MyTeam}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <HomepageOverview />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
