import React, {Component,useState} from 'react';
import {
 TextInput,
    View,

    TouchableOpacity,
    Text,
} from 'react-native';
import globals from '../common/globals';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default  function HeaderComponent2({text1,text2,onPress})  {
        return (

            <View style={{flexDirection:'row',paddingTop:30,paddingBottom:10,backgroundColor:globals.theme_color,alignItems:'center',elevation:2}}>
                <Text style={{fontSize:18,color:"#fff",fontFamily:globals.SEGOEUI,flex:1,textAlign:'center',paddingLeft:30}}>{text2}</Text>
               <TouchableOpacity onPress={onPress}>
                <Text style={{color:"#fff",fontFamily:globals.SEGOEUI,paddingRight:10}}>{text1}</Text>
               </TouchableOpacity>
            </View>
        );

}

