import React, {PureComponent} from "react";

import {View, StyleSheet, Text, Image} from "react-native";
import globals from '../../app/common/globals'
import connect from "react-redux/lib/connect/connect";


export default class TabBarCartContainer extends PureComponent {


    _renderNumberWrap = (number = 0) => {
        return (
            <View style={styles.numberWrap}>
                <Text style={styles.number}>{number}</Text>
            </View>
        );
    };

    render() {
        const {
            icon,
            tintColor,
            SelectedStyle,

        } = this.props;


        return (

            <View style={{
                alignSelf: 'flex-end',
                justifyContent: 'center',
                height: 60,
                width: 60,
                borderRadius: 60,
                borderWidth: 4,
                borderColor: '#fff',
                backgroundColor: globals.theme_color,
                zIndex: 2,
                paddingHorizontal:10,
                marginHorizontal: 20,
                marginBottom: 30
            }}>
                <Image source={require('../Images/camera.png')}
                       style={{height: 30, width: 30, alignSelf: 'center', tintColor: 'white',}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    numberWrap: {
        position: "absolute",
        top: -10,
        right: -10,
        height: 18,
        minWidth: 18,
        backgroundColor: 'white',
        borderRadius: 9,
    },
    number: {
        color: "white",
        fontSize: 12,
        marginLeft: 3,
        marginRight: 3,
    },
});
