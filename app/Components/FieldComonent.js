import React, {Component,useState} from 'react';
import {
    TextInput,
    View,

    TouchableOpacity,
    Text, Image,
} from 'react-native';
import globals from '../common/globals';
import {Color, Constants} from "../common";



export default  function FieldComonent({ image,autoCompleteType,autoFocus,title,secureTextEntry,onChangeText,children,value,exterViewStyle,exterTextStyle,placeholderTextColor})  {
    return (

        <View style={[{paddingVertical:5,paddingHorizontal:10,flexDirection:"row",alignItems:"center",backgroundColor:"#fff"},exterViewStyle]}>
            {children}
            <TextInput  autoCompleteType={autoCompleteType} secureTextEntry={secureTextEntry} autoFocus={autoFocus} value={value} onChangeText={onChangeText} style={[{marginHorizontal:15,fontSize:13,paddingVertical:7,flex:1},exterTextStyle]} placeholderTextColor={placeholderTextColor} placeholder={title}></TextInput >
        </View>
    );

}


export   function UpdateFieldComponenet({ image,autoCompleteType,autoFocus,title,secureTextEntry,onChangeText,value,exterViewStyle,exterTextStyle,placeholderTextColor})  {
    return (

        <View style={[{paddingVertical:5,paddingHorizontal:10,marginTop:10,backgroundColor:"#fff",width:'100%'},exterViewStyle]}>

            <Text style={{fontFamily:Constants.fontFamilyMedium,fontSize:15,alignSelf:'center',color:'#333333',includeFontPadding:false}}>{title}</Text>
            <TextInput  autoCompleteType={autoCompleteType} secureTextEntry={secureTextEntry} autoFocus={autoFocus} value={value} onChangeText={onChangeText} style={[{fontSize:13,paddingVertical:10,backgroundColor:'rgba(18,110,179,0.10)',borderRadius:10,paddingHorizontal:10,marginTop:5},exterTextStyle]} placeholderTextColor={placeholderTextColor} placeholder={title}></TextInput >

        </View>
    );

}
