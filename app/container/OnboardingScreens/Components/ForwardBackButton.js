import {View} from "react-native";
import {useEffect, useState} from "react";
import Color from "../../../common/Color";
import React from 'react';

export default  function ForwardBackButton({selectedIndex,onBackPress,onForwardPress}) {

    return (
        <View style={{flexDirection:'row'}}>
<View style={{height:10,width:index==0?40:10,borderRadius:5,backgroundColor:index==0?Color.secondary:'white'}}/>
<View style={{height:10,width:index==1?40:10,borderRadius:5,backgroundColor:index==1?Color.secondary:'white',marginHorizontal:5}}/>
<View style={{height:10,width:index==2?40:10,borderRadius:5,backgroundColor:index==2?Color.secondary:'white'}}/>
        </View>
    )
}
