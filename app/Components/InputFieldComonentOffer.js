import React, {Component,useState} from 'react';
import {
    TextInput,
    View,

    TouchableOpacity,
    Text, Image,
} from 'react-native';
import globals from '../common/globals';
import {Constants} from "../common";



export default  function InputFieldComonentOffer({ image,autoCompleteType,autoFocus,title,secureTextEntry,onChangeText,children,value,exterViewStyle,exterTextStyle,placeholderTextColor})  {
    return (

        <View style={[{padding:10,backgroundColor:"#fff",marginHorizontal:10},exterViewStyle]}>
           <Text style={{fontFamily:Constants.fontFamilyMedium,fontSize:13,color:'#333333',includeFontPadding:false}}>{title}</Text>
            <TextInput multiline={true}  autoCompleteType={autoCompleteType} secureTextEntry={secureTextEntry} autoFocus={autoFocus} value={value} onChangeText={onChangeText} style={[{fontSize:13,marginTop:5,includeFontPadding:false,paddingVertical:0,fontFamily:Constants.fontFamilyRegular,color:'#808080'},exterTextStyle]} placeholderTextColor={placeholderTextColor} placeholder={title}></TextInput >
        </View>
    );

}


export  function FieldComonentProfile({onPress, image,autoCompleteType,autoFocus,title,secureTextEntry,onChangeText,children,value,exterViewStyle,exterTextStyle,placeholderTextColor})  {
    return (

        <TouchableOpacity onPress={onPress} style={[{padding:10,backgroundColor:"#fff",marginHorizontal:10},exterViewStyle]}>
            <Text style={{fontFamily:Constants.fontFamilyMedium,fontSize:13,color:'#333333',includeFontPadding:false}}>{title}</Text>
            <Text multiline={true}  autoCompleteType={autoCompleteType} secureTextEntry={secureTextEntry} autoFocus={autoFocus} value={value} onChangeText={onChangeText} style={[{fontSize:13,marginTop:10,includeFontPadding:false,paddingVertical:0,fontFamily:Constants.fontFamilyRegular,color:'#808080'},exterTextStyle]} placeholderTextColor={placeholderTextColor} placeholder={title}>{value}</Text >
        </TouchableOpacity>
    );

}