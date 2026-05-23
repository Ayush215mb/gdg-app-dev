import React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";

const iconMap = {
  Home: { focused: "home", unfocused: "home-outline" },
  Profile: { focused: "person", unfocused: "person-outline" },
  Settings: { focused: "settings", unfocused: "settings-outline" },
};

/*
const MyTabs = createBottomTabNavigator({
  screens: {
    Home: Home,
    Profile: Profile,
    Settings: Settings,
  },
});
 */

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: { title: "Home" },
    },
    Profile: {
      screen: Profile,
      options: { title: "Profile" },
    },
    Settings: {
      screen: Settings,
      options: { title: "Settings" },
    },
  },
  screenOptions: ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const icons = iconMap[route.name];
      const iconName = focused ? icons.focused : icons.unfocused;
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#6366f1",
    tabBarInactiveTintColor: "gray",
  }),
});

const Navigation = createStaticNavigation(MyTabs);

const TabNavigator = () => {
  return <Navigation />;
};

export default TabNavigator;
