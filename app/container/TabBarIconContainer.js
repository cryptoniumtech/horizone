import React, { PureComponent } from "react";

import { View, StyleSheet, Text, Image } from "react-native";
import globals from '../common/globals'



export default class TabBarIconContainer extends PureComponent {


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


        } = this.props;


        return (
            <View style={[{alignItems:'center',marginVertical:5,justifyContent:"space-evenly"},]}>
            <View>
                <Image
                    ref={(comp) => (this._image = comp)}
                    source={icon}
                    style={[styles.icon,]}
                />
            </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: "35%",
        height: undefined,
        aspectRatio:1,
        resizeMode: "contain",
    },
    numberWrap: {
        position: "absolute",
        top: -10,
        right: -10,
        height: 18,
        minWidth: 18,
        backgroundColor: globals.theme_color,
        borderRadius: 9,
    },
    number: {
        color: "white",
        fontSize: 12,
        marginLeft: 3,
        marginRight: 3,
    },
});
