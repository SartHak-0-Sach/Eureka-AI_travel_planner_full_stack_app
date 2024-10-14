import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from '../../constants/Colors';

export default function StartNewTripCard() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-outline" size={30} color="black" />
      <Text
        style={{
          fontFamily: "roboto-bold",
          fontSize: 25,
        }}
      >
        No trips planned yet
      </Text>

      <Text
        style={{
          fontFamily: "roboto",
          fontSize: 20,
          textAlign:'center',
          color:Colors.GRAY
        }}
      >
        Looks like its time to plan a new travle experience!! Get Started below.
      </Text>

      <TouchableOpacity style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30,

      }}>
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'roboto-medium',
            fontSize:17
        }}>Start a new Trip</Text>
      </TouchableOpacity>
    </View>
  );
}