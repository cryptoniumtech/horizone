'use strict';

import React, {Component} from 'react';
import {
    AsyncStorage,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    Modal,
    ImageBackground
} from 'react-native';
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
    user
});

@connect(
    mapStateToProps,
    {logout}
)

class NavigationDrawerUser extends Component<Props> {

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
                    <Image source={require('../Images/ProfileImage.png')}
                           style={{height: 40, width: 40, borderRadius: 20}}/>
                    <View style={{marginLeft: 10,flex:1}}>
                        <Text style={{color: '#fff', fontSize: 15, fontFamily: Constants.fontFamilyMedium}}>User
                            Name</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 10,
                            fontFamily: Constants.fontFamilyRegular,
                            includeFontPadding: false
                        }}>username@gmail.com</Text>
                    </View>
                    <ImageBackground source={require('./../Images/pointBackground.png')} style={{
                        height: 40,
                        marginRight:10,
                        width: undefined,
                        aspectRatio: 1.064,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{fontFamily: Constants.fontFamilyBold, fontSize: 12, color: Color.primary}}> 24</Text>
                    </ImageBackground>
                </View>
                <View style={{backgroundColor: '#fff', flex: 1, borderBottomRightRadius: 20, padding: 30}}>
                    <DrawerItem name={'Home'} onPress={()=>{this.props.navigation.navigate('HomeUser')}} image={require('../Images/homeMenu.png')}/>
                    <DrawerItem name={'Points'} onPress={()=>{this.props.navigation.navigate('PointsUser')}} image={require('../Images/trophyMenu.png')}/>
                    <DrawerItem name={'Payment'} onPress={()=>{this.props.navigation.navigate('PaymentScreen')}} image={require('../Images/paymentsMenu.png')}/>
                    <DrawerItem name={'Packages'} onPress={()=>{this.props.navigation.navigate('packages')}} image={require('../Images/packagesMenu.png')}/>
                    <DrawerItem name={'Profile'} onPress={()=>{this.props.navigation.navigate('ProfileUser')}} image={require('../Images/personMenu.png')}/>
                    <DrawerItem name={'Messages'} onPress={()=>{this.props.navigation.navigate('messages')}} image={require('../Images/messageMenu.png')}/>
                    <DrawerItem name={'History'} onPress={()=>{this.props.navigation.navigate('HistoryScreen')}} image={require('../Images/historymenu.png')}/>

                </View>

            </View>
        );
    }
}


export default NavigationDrawerUser;

function DrawerItem({image, name, onPress}) {

    return (<TouchableOpacity onPress={onPress} style={{flexDirection: 'row', alignItems: 'center',margin:10}}>
        <Image source={image} style={{height: 20, width: 20, resizeMode: 'contain'}}/>
        <Text style={{color: '#000', marginLeft: 10, fontSize: 15, fontFamily: Constants.fontFamilyMedium}}>{name}</Text>
    </TouchableOpacity>)
}
