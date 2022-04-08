import {Image, TouchableOpacity, View} from "react-native";

import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";

export default  function LoginHeader({onBackPress}) {

    return (
        <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
<TouchableOpacity style={{height:30,width:30,borderRadius:15,borderWidth:1,borderColor:'#9F9696',justifyContent:'center',alignItems:'center'}}>
                <Ionicons name={'md-chevron-back'} color={'#fff'} size={20}/>
</TouchableOpacity>

        </View>
    )
}
