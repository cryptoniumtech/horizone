import React, {Component,useState} from 'react';
import {
    TextInput,
    View,

    TouchableOpacity,
    Text, Image,
} from 'react-native';
import globals from '../common/globals';



export default  function ProfileComonent({ onPress,extraViewStyle,text,children,})  {
    return (

        <TouchableOpacity onPress={onPress} style={[{flexDirection:"row",paddingLeft:20,paddingVertical:10,alignItems:"center",borderBottomWidth:0.5},extraViewStyle]}>
            {children}
            <Text style={{marginLeft:10,fontFamily:globals.SEGOEUI,fontSize:18,color:"rgba(0,0,0,0.61)"}}>{text}</Text>

        </TouchableOpacity>

    );

}
