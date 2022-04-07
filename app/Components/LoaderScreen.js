import React, {} from 'react';
import {
    View, ActivityIndicator, Text,
} from 'react-native';
import I18n from "react-native-i18n";

import  {theme_color} from '../common/globals';



export default  function LoaderScreen({text=I18n.t("Loading")})  {
    return (

        <View style={{height:'100%',width:'100%',backgroundColor:'rgba(64,64,64,0.65)',justifyContent:'center',position:'absolute',top:0,bottom:0,left:0,right:0,zIndex:10,alignItems:'center'}}>
            < ActivityIndicator  style={{}} color={'white'} size={'large'}/>
            <Text style={{fontSize:15,color:'white'}}>{text}</Text>
        </View>



    );

}
