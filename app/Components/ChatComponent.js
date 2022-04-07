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



export default  function ChatComponent({ onPress,image,message,message1,time,notification,name})  {
    return(
        <TouchableOpacity onPress={onPress} style={{flexDirection:"row",marginRight:20,marginTop:20}}>
            <View style={{backgroundColor:notification,height:16,width:16,borderRadius:16,zIndex:2,right:-60,top:-4}}></View>
            <Image source={image} resizeMode={"contain"} style={{width:"20%",backgroundColor:"#fff"}}/>
            <View style={{flex:1,marginLeft:10,paddingVertical:10,borderBottomWidth:0.5}}>
                <Text style={{fontSize:20,fontFamily:globals.SEGOEUIBold}}>{name}</Text>
                <Text style={{fontSize:13,color:globals.text_grey,fontFamily:globals.SEGOEUI}}>{message}</Text>
                <Text style={{fontSize:13,marginTop:-3,color:globals.text_grey,fontFamily:globals.SEGOEUI}}>{message1}</Text>
                <Text style={{alignSelf:"flex-end",marginTop:-3,fontSize:12,color:globals.text_grey,fontFamily:globals.SEGOEUI}}>{time}</Text>
            </View>
        </TouchableOpacity>

    )


}
