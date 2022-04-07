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



export default  function FarmComponent({ farmName,farmImage,location,starCount,rating})  {
    return(
        <View style={{flexDirection:'row',margin:15,alignItems:'center'}}>
            <Image source={farmImage} style={{width:60,borderRadius:60,height:60,aspectRatio:1,backgroundColor:globals.theme_color}}/>
            <View style={{marginLeft:10}}>
                <Text style={{fontFamily:globals.SEGOEUIBold,color:"#000",fontSize:18}}>{farmName}</Text>

                <View style={{flexDirection:'row',alignItems:'center'}}>

                    <Ionicons style={{marginRight:2,}} name={'location-outline'} color={globals.theme_color} size={16}/>
                    <Text style={{fontSize:13}}>{location} </Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:2}}>
                    <StarRating
                        style={{color: globals.theme_color}}
                        starStyle={{color: globals.theme_color,marginHorizontal:1,}}
                        disabled={false}
                        maxStars={5}
                        starSize={12}
                        rating={starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                    <Text style={{fontFamily:globals.SEGOEUIBold,color:"#000",marginLeft:5,}}>{rating}</Text>
                </View>
            </View>
        </View>

    )


}
