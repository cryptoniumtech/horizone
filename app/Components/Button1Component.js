import React, {} from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import globals from '../common/globals';
import {Color, Constants} from "../common";


export default  function Button1Component({children,extratextstyle,title,extraviewstyle,onPress})  {
    return (

            <TouchableOpacity  onPress={onPress} style={[{marginTop:5,paddingHorizontal:10,paddingVertical:12,borderRadius:20,backgroundColor:Color.secondary,justifyContent:'center',alignItems:"center",flexDirection:'row'},extraviewstyle]}>
            {children}
            <Text  style={[{fontFamily:Constants.fontFamilyMedium,marginHorizontal:30,color:"#fff",fontSize:18},extratextstyle]}>
                {title}
            </Text>

        </TouchableOpacity>
    );

}
