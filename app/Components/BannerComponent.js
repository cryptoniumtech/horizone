import React, {Component, useState} from 'react';
import {
    Dimensions,
    Image, Platform, Text, TouchableOpacity, View
} from 'react-native';
let bannersdata=[require('../Images/ImageIcon.png'),require('../Images/sliderImage.png'),require('../Images/sliderImage.png')]
import Carousel, {ParallaxImage} from "react-native-snap-carousel";

const screenWidth=  Dimensions.get('window').width;


export default  function BannerComponent({banners,onPress})  {
    const renderItem = ({item, index}, parallaxProps) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                width: screenWidth - 120,
                height: undefined,
                aspectRatio:1.7,
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:item,
            }}>
                <Image
                    source={bannersdata[0]}

                    style={{ resizeMode: 'contain', height:100,
                        width:100,}}


                />

            </TouchableOpacity>
        );
    };
    return (
        <View style={{paddingBottom:15,marginTop:20}}>
        <Carousel

            data={banners}
            renderItem={renderItem}
            autoplay={true}

            enableMomentum={false}
            autoplayDelay={1000}
            onSnapToItem={(index) => {

            }}
            loop={true}
            hasParallaxImages={true}
            layoutCardOffset={60}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.9}

            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 120}
        />

        </View>
    );

}
