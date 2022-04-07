import React from 'react';
import {View,TouchableWithoutFeedback} from 'react-native';



const Card = ({children,outerstyles,onPress}) => {
    return (
        <TouchableWithoutFeedback
        onPress={onPress}
        >

            <View style={[{
                backgroundColor: '#fff',
                elevation:2,
                borderRadius:10,
                margin:3,
                shadowRadius: 5,
                shadowOpacity: 0.2,
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },



            }, outerstyles]}>
                {children}
            </View>
        </TouchableWithoutFeedback>

    );
};



export default Card;

export const CardBackground = ({children,outerstyles,onPress}) => {
    return (


            <View style={[{
                backgroundColor: '#fff',
                elevation:2,
                borderRadius:10,
                margin:3,
                shadowRadius: 5,
                shadowOpacity: 0.2,
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },



            }, outerstyles]}>
                {children}
            </View>


    );
};
