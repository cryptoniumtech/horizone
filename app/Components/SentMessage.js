import React, {Component,useState} from 'react';
import {
    TextInput,
    View,

    TouchableOpacity,
    Text, Image,
} from 'react-native';
import globals from '../common/globals';
import Ionicons from "react-native-vector-icons/Ionicons";
import StarRating from "react-native-star-rating";



export default  function SentMessage({ message, time,image})  {
    return(
        <View style={{flexDirection: "row", marginTop: 10}}>
            <View style={{
                flex: 1,
                marginHorizontal: 10,
                marginTop: 7,
                justifyContent: "space-between",
                flexDirection: "row",
            }}>
                <Text style={{
                    fontSize: 14,
                    marginRight: 10,
                    marginBottom: 3,
                    alignSelf: "flex-end",
                    color: globals.text_grey,
                    fontFamily: globals.SEGOEUI
                }}>{time}</Text>
                <View style={{
                    borderRadius: 7,
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    backgroundColor: globals.theme_color
                }}>
                    <Text style={{fontFamily: globals.SEGOEUI, fontSize: 16}}>{message}</Text>
                </View>
            </View>


        </View>

    )


}
