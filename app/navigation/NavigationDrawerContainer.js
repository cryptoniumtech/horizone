'use strict';

import React, {Component} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {logout} from "@redux/operations"
import Constants from "../common/Constants";
import Color from "../common/Color";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import globals from "../common/globals";
import TextWithIcon from "../Components/TextWithIcon";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import drawer from "./drawer_ref";

var Screenwidth = Dimensions.get('window').width; //full width
var Screenheight = Dimensions.get('window').height;
const mapStateToProps = ({user, app}) => ({
    app,
    user
});

@connect(
    mapStateToProps,
    {logout}
)

class NavigationDrawerContainer extends Component<Props> {

    constructor(props) {
        super(props);


        this.state = {



            loading: false,
            modalvisible:false

        };

    }



    render() {
        const {navigation}=this.props;
        return (

         <ImageBackground source={require('../Images/drawerBackground.png')} style={{flex:1}}>


                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',flex:1,width:'100%'}}>
                        <View style={{width:'15%'}}/>
                        <View style={{width:'55%'}}>
                            <View style={{height:'10%'}}/>
                            <View style={{height:'75%'}}>

                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={require('../Images/itemImage1.png') } style={{width:60,height:60,borderRadius:30}}/>
                                    <Text style={{
                                        fontSize: 18,
                                        marginLeft:10,
                                        includeFontPadding: false,
                                        fontFamily: Constants.fontFamilyRegular,
                                        color: '#fff'
                                    }}>{"Lara A."}</Text>



                                </View>

<View style={{flex:1,marginVertical:'25%'}}>
    <TextWithIcon onPress={()=>{navigation.navigate('HomeDrawer',{screen:'Home'})
        drawer.current?.close()
    }} title={'Home'} >
        <Image source={require('../Images/homeHomeIcon.png')} style={{width:20,height:20,tintColor:'white',resizeMode:'stretch'}}/>
    </TextWithIcon>
    <TextWithIcon onPress={()=>{navigation.navigate('HomeDrawer',{screen:'Search'})
        drawer.current?.close()
    }} title={'Search'} >
        <Image source={require('../Images/homeSearchIcon.png')} style={{width:18,height:18,tintColor:'white',resizeMode:'stretch'}}/>
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{navigation.navigate('HomeDrawer',{screen:'Profile'})
            drawer.current?.close()
        }}
        title={'Profile'} >
        <Image source={require('../Images/ProfileIconeImage.png')} style={{width:18,height:18,tintColor:'white',resizeMode:'stretch'}}/>
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{navigation.navigate('FavoriteScreen')
            drawer.current?.close()
        }}
        title={'Favorites'} >
        <IonIcon name={'heart-outline'} size={18} color={'#fff'} style={{width:18,height:18,tintColor:'white',resizeMode:'stretch'}}/>
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{navigation.navigate('HomeDrawer',{screen:'Cart'})
            drawer.current?.close()
        }}
        title={'My Cart'} >
        <SimpleLineIcons name={'handbag'} size={18} color={'#fff'} style={{width:18,height:18,tintColor:'white',resizeMode:'stretch'}}/>
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{navigation.navigate('NotificationsScreen')
            drawer.current?.close()
        }}
        title={'Notifications'} >
        <IonIcon name={'notifications-outline'} size={20} color={'#fff'} style={{width:18,height:18,tintColor:'white',resizeMode:'stretch'}}/>
    </TextWithIcon>
</View>
                                <TouchableOpacity onPress={()=>{ drawer.current?.close()}} style={{borderColor: 'white',alignSelf: 'baseline',borderWidth:0.5,borderRadius:10,padding:10,flexDirection:'row',justifyContent: 'center',alignItems:'center'}}>
                                    <MaterialIcons name={'exit-to-app'} size={20} color={'white'}/>
                                    <Text style={{
                                        fontSize: 14,
                                         paddingHorizontal:10,
                                        includeFontPadding: false,
                                        fontFamily: Constants.fontFamilyRegular,
                                        color: '#fff'
                                    }}>{"Logout"}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{height:'15%'}}/>
                        </View>
                        <View style={{width:'30%'}}/>

                    </View>

                </View>





         </ImageBackground>
        );
    }
}

const styles = {
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    tabContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#1676d1',
        borderColor: '#FFFFFF',
        borderTopWidth: 0,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    mainHeaderViewStyle: {
        width: parseInt(Screenwidth),
        height: Platform.OS == "android" ? 55 : 65,
        flexDirection: "row",
        alignItems: "center"
    },
    mainHeaderViewStyleCopy: {
        //flex:.10,
        width: parseInt(Screenwidth),
        height: (Platform.OS == 'android' ? 55 : 65),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    headerImage: {
        resizeMode: 'stretch',
        width: parseInt(Screenwidth),
        height: 55,
    },

    iconImageStyle: {
        height: 34,
        width: 34,
        resizeMode: 'stretch'
    },
    dividerStyle: {
        width: '100%',
        height: 1,
        resizeMode: 'stretch'
    },



}
export default NavigationDrawerContainer;
