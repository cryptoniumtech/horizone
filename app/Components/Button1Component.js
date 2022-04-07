import React, {} from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import globals from '../common/globals';
import {Constants} from "../common";


export default  function Button1Component({children,extratextstyle,title,extraviewstyle,onPress})  {
    return (

        <TouchableOpacity  onPress={onPress} style={[{marginTop:10,paddingHorizontal:10,paddingVertical:12,borderRadius:30,backgroundColor:globals.theme_color,justifyContent:'center',alignItems:"center",flexDirection:'row'},extraviewstyle]}>
            {children}
            <Text  style={[{fontFamily:Constants.fontFamilyMedium,marginHorizontal:30,color:"#fff"},extratextstyle]}>
                {title}
            </Text>

        </TouchableOpacity>
    );

}
