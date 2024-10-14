import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from './../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY, // Color for the active tab
        tabBarInactiveTintColor: Colors.GRAY, // Color for the inactive tabs
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}