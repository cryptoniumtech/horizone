import React, {Component,useState} from 'react';
import {
    TouchableOpacity,
    Text, View,
} from 'react-native';
import globals from '../common/globals';
import FontAwesome from "react-native-vector-icons/FontAwesome";


export default  function ButtonwithiconComponent({disable,extratextstyle,title,extraviewstyle,onPress,children})  {
        return (

            <TouchableOpacity disabled={disable} onPress={onPress}  style={[{paddingVertical:12,borderRadius:15,flexDirection:'row',alignItems:'center',backgroundColor:globals.light_blue,marginVertical:10},extraviewstyle]}>
                {children}
                <Text  style={[{fontFamily:globals.SEGOEUIBold,color:globals.theme_color,fontSize:16,alignSelf:'center',},extratextstyle]}>{title}</Text>
            </TouchableOpacity>

        );

}

