import React, {} from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import globals from '../common/globals';


export default  function SignButtonComponent({extratextstyle,title,extraviewstyle,onPress})  {
    return (

        <TouchableOpacity onPress={onPress} style={[{marginVertical:10,paddingVertical:7,width:"55%",alignSelf:"center",backgroundColor:globals.theme_color,borderColor:globals.darktheme_color,borderWidth:2,alignItems:"center"},extratextstyle]}>
            <Text style={[{color:"#fff",fontSize:18,fontFamily:globals.SEGOEUIBold},extratextstyle]}>{title}</Text>
        </TouchableOpacity>
    );

}
