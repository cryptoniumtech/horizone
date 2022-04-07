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



export default  function ReceiveMessage({ message, time,image})  {
    return(
        <View style={{flexDirection: "row", marginLeft: 20, marginTop: 10,}}>

            <Image source={image} resizeMode={"contain"}
                   style={{width: "10%", height: undefined, aspectRatio: 1}}/>
            <View style={{
                flex: 1,
                marginLeft: 15,
                marginTop: 7,
                justifyContent: "space-between",
                flexDirection: "row",
            }}>
                <View style={{
                    borderRadius: 7,
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    backgroundColor: "#dddddd"
                }}>
                    <Text style={{fontFamily: globals.SEGOEUI, fontSize: 16}}>{message}</Text>
                </View>
                <Text style={{
                    fontSize: 14,
                    marginRight: 10,
                    marginBottom: 3,
                    alignSelf: "flex-end",
                    color: globals.text_grey,
                    fontFamily: globals.SEGOEUI
                }}>{time}</Text>
            </View>


        </View>

    )


}
