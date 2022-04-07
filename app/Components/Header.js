import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View,} from 'react-native';
import Color from "../common/Color";
import Constants from "../common/Constants";
import drawer from "../navigation/drawer_ref";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import globals from "../common/globals"
import IonIcon from "react-native-vector-icons/Ionicons";


export default  function Header({backgroundColor,onPressLeft,onPress2,title,ExtraStyle,back,edit,color})  {

        return (
            <View style={[{flexDirection:'row',width:'100%',paddingVertical:20,justifyContent:'space-between',backgroundColor:backgroundColor??Color.primary,alignItems:'center'},ExtraStyle]}>
                {back==true? <Ionicons name={"arrow-back"} onPress={onPressLeft} size={30} color={color} style={{marginLeft:10}}/>:
                    <Entypo name={"menu"} size={30} onPress={onPressLeft} color={"#fff"} style={{marginLeft:10}}/>}

                <Text style={{zIndex:-2,color:color,position:'absolute',right:0,left:0,textAlign:'center',alignSelf:'center',fontSize:20,fontFamily:Constants.fontFamilyBold}}>{title}</Text>
                {edit==true? <AntDesign name={"edit"} size={30} onPress={onPress2} color={"#fff"} style={{marginRight:10}}/>
                    :
                    <Text style={{color:"#fff",fontSize:20,paddingRight:10}}></Text>}

            </View>

        )

}

export   function HeaderUser({backgroundColor,iconColor,onPressLeft,title,ExtraStyle,back,points,color})  {

    return (
        <View style={[{flexDirection:'row',width:'100%',paddingVertical:20,paddingHorizontal:10,justifyContent:'space-between',backgroundColor:backgroundColor??Color.primary,alignItems:'center'},ExtraStyle]}>
            {back==true? <Ionicons name={"arrow-back"} onPress={onPressLeft} size={30} color={iconColor??color} style={{}}/>:
                <IonIcon name={"menu-outline"} size={30} onPress={onPressLeft} color={iconColor??"#000"} style={{marginLeft:10}}/>}

            <Text style={{zIndex:-2,color:color,position:'absolute',right:0,left:0,textAlign:'center',alignSelf:'center',fontSize:20,fontFamily:Constants.fontFamilyBold}}>{title}</Text>
            {points?   <ImageBackground source={require('../Images/pointBackground.png')} style={{
                height: 40,
                width: undefined,
                aspectRatio: 1.064,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{fontFamily: Constants.fontFamilyBold, fontSize: 12, color: Color.primary}}> 24</Text>
            </ImageBackground>:null}
        </View>

    )

}
