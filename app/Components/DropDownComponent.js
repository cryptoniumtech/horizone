import React, {Component,useState} from 'react';
import {
    TextInput,
    View,

    TouchableOpacity,
    Text, Image,
} from 'react-native';
import globals from '../common/globals';
import AntDesign from "react-native-vector-icons/AntDesign";



export default  function DropDownComponent({ title,Image,children,exterViewStyle})  {
    return (

        <TouchableOpacity style={[{borderRadius: 10,marginHorizontal:20,marginTop:5,paddingVertical:5,paddingHorizontal:10,flexDirection:"row",alignItems:"center",backgroundColor:"#fff"},exterViewStyle]}>
            {children}
             <Text style={{fontSize:22,fontWeight:"bold",flex:1,color:"#000"}}>{title}</Text>
            <AntDesign name={"down"} size={20}  />
        </TouchableOpacity>
    );

}
