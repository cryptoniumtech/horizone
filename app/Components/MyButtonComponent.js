import React, {Component,useState} from 'react';
import {
 TextInput,
    View,

    TouchableOpacity,
    Text,
} from 'react-native';
import globals from '../common/globals';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import Constants from "../common/Constants";
import {Color} from "../common";


export default  function MyButtonComponent({children,disable,extratextstyle,title,extraviewstyle,onPress})  {
        return (
            <TouchableOpacity disabled={disable} onPress={onPress} style={[{paddingVertical:5,borderRadius:30,marginHorizontal:10,backgroundColor:Color.secondary},extraviewstyle]}>
                <Text style={[{  fontFamily:Constants.fontFamilyMedium,paddingVertical:6,color:'#fff',alignSelf:'center',paddingHorizontal:15 },extratextstyle]}>
                {title}
            </Text>
                {children}
            </TouchableOpacity>
        )

}

