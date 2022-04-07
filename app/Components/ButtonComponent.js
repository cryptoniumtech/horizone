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


export default  function TimePikerComponent({disable,extratextstyle,title,extraviewstyle,onPress})  {
        return (
            <TouchableOpacity disabled={disable} onPress={onPress} style={[{paddingVertical:5,borderRadius:25,backgroundColor:globals.theme_color},extraviewstyle]}>
                <Text style={[{fontFamily:globals.SEGOEUIBold,paddingVertical:6,color:'#fff',alignSelf:'center',paddingHorizontal:15 },extratextstyle]}>
                {title}
            </Text>

            </TouchableOpacity>
        )

}

