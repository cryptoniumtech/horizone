import React, {Component,useState} from 'react';
import {
    TextInput,
    View,

    TouchableOpacity,
    Text, Image,
} from 'react-native';
import globals from '../common/globals';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";


export default  function SignButtonsComponent({image,text,onPress,extraStyle})  {
    return (

        <TouchableOpacity onPress={onPress} style={[{paddingVertical:10,paddingHorizontal:10,justifyContent:"space-between",marginHorizontal:20,marginTop:10,flexDirection:"row",alignItems:"center",backgroundColor:"#fff"},extraStyle]}>
            <Image source={image} resizeMode={"contain"} style={{width:"8%",height:undefined,aspectRatio:1}}/>
            <Text>{text}</Text>
            <Text></Text>
        </TouchableOpacity>
    );

}

