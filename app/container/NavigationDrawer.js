'use strict';

import React, {Component} from 'react';
import {AsyncStorage, Image, ScrollView, Text, TouchableOpacity, View, Dimensions, Modal} from 'react-native';
import globals from '../common/globals';

var Screenwidth = Dimensions.get('window').width; //full width
var Screenheight = Dimensions.get('window').height;
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import Octicons from "react-native-vector-icons/Octicons";
import ButtonComponent from "../Components/ButtonComponent";
import TextWithIcon from "../Components/TextWithIcon";
import {connect} from "react-redux";
import {logout} from "@redux/operations"
import {Color, Constants} from "../common";

const mapStateToProps = ({user, app}) => ({
    app,
    user,
    userInfo:user.userInfo
});

@connect(
    mapStateToProps,
    {logout}
)

class NavigationDrawer extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {};

    }


    render() {
        const {navigation} = this.props;
        return (
            <View style={{
                flex: 1,
                elevation: 3,
                marginVertical: 5,
                backgroundColor: '#fff',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20

            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 20,
                    paddingLeft: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 18,
                    backgroundColor: Color.primary,
                    width: '100%',
                    height: undefined,
                    aspectRatio: 1.71
                }}>
                    <Image source={this.props.userInfo?.profile_pic?{uri:this.props.userInfo?.profile_pic}:require('../Images/profile.png')}
                           style={{height: 40, width: 40, borderRadius: 20,borderWidth:2,borderColor:'#fff',padding:3}}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={{color: '#fff', fontSize: 15, fontFamily: Constants.fontFamilyMedium}}>{this.props.userInfo?.first_name +" "+this.props.userInfo?.last_name}</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyLight,
                            includeFontPadding: false
                        }}>{this.props.userInfo?.email}</Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#fff', flex: 1, borderBottomRightRadius: 20, padding: 30}}>
                    <DrawerItem name={'Home'} onPress={()=>{this.props.navigation.navigate('home')}} image={require('../Images/homeMenu.png')}/>
                    <DrawerItem name={'Buy Points'} onPress={()=>{this.props.navigation.navigate('buypoints')}} image={require('../Images/trophyMenu.png')}/>
                    <DrawerItem name={'Payment'} onPress={()=>{this.props.navigation.navigate('payment')}} image={require('../Images/paymentsMenu.png')}/>
                    <DrawerItem name={'Statistics'} onPress={()=>{this.props.navigation.navigate('state')}} image={require('../Images/stateMenu.png')}/>
                    <DrawerItem name={'Profile'} onPress={()=>{this.props.navigation.navigate('profile')}} image={require('../Images/personMenu.png')}/>
                    <DrawerItem name={'Messages'} onPress={()=>{this.props.navigation.navigate('messages')}} image={require('../Images/messageMenu.png')}/>
                    <DrawerItem name={'Add an Offer'} onPress={()=>{this.props.navigation.navigate('offer')}} image={require('../Images/tagMenu.png')}/>
                   <View style={{marginTop:20}}/>
                    <DrawerItem  name={'Logout'} onPress={()=>{
                        this.props.logout()
                        this.props.navigation.replace('AuthStack',{screen:'LoginScreen'})}} image={require('../Images/tagMenu.png')}/>

                </View>

            </View>
        );
    }
}


export default NavigationDrawer;

function DrawerItem({image, name, onPress}) {

    return (<TouchableOpacity onPress={onPress} style={{flexDirection: 'row', alignItems: 'center',margin:10}}>
        <Image source={image} style={{height: 20, width: 20, resizeMode: 'contain'}}/>
        <Text style={{color: '#000', marginLeft: 10, fontSize: 15, fontFamily: Constants.fontFamilyMedium}}>{name}</Text>
    </TouchableOpacity>)
}
