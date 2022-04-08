import React, {Component} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View,} from 'react-native';
import connect from "react-redux/lib/connect/connect";
import Color from "../../common/Color";
import FieldComonent from "../../Components/FieldComonent";
import LoginHeader from "../Components/LoginHeader";
import Constants from "../../common/Constants";
import Button1Component from "../../Components/Button1Component";
import MyButtonComponent from "../../Components/MyButtonComponent";


const mapStateToProps = ({user, app}) => ({
    app,
    user
});

@connect(
    mapStateToProps,
    { }
)

export default class LoginScreen extends Component {


    constructor(props) {

        super(props);
        this.state = {
            Selected: 0,
        }
        this.pager=React.createRef();


    }


    render() {


        return (
            <SafeAreaView style={{flex:1,backgroundColor:Color.primary}}>
<LoginHeader onBackPress={()=>{
this.props.navigation.pop()
}}/>
                <View style={{padding:20,flex:1}}>

                    <Image source={require('../../Images/LoginIcon.png')} style={{
                        height: undefined,
                        width: '60%',
                        aspectRatio: 1,
                        alignSelf: 'center'
                    }}/>
                    <Text style={{
                        fontSize: 25,
                        fontFamily:Constants.fontFamilyBold,
                        color: '#fff',
                        marginTop:15,
                        includeFontPadding: false,
                        padding: 0
                    }}>Let’s Sign you in</Text>
                    <Text style={{
                        fontSize: 18,
                        color: Color.textColor,
                        fontFamily: Constants.fontFamilyRegular,
                        textAlign: 'left'
                    }}>{'Welcome Back,\nYou’ve been missed'}</Text>
                <FieldComonent exterViewStyle={{marginTop:30}} value={this.state.email} title={'example@gmail.com'} onChangeText={(text) => {
                    this.setState({email:text})
                }}>
                    <Image source={require('../../Images/email_icon.png')} resizeMode={"contain"}
                           style={{width: 25, aspectRatio: 1, height: undefined,tintColor:'#fff'}}/>
                </FieldComonent>
                    <FieldComonent exterViewStyle={{marginTop:30}} value={this.state.email} title={'Password'} onChangeText={(text) => {
                        this.setState({email:text})
                    }}>
                        <Image source={require('../../Images/passwordIcon.png')} resizeMode={"contain"}
                               style={{width: 20, aspectRatio: 1, height: undefined,tintColor:'#fff'}}/>
                    </FieldComonent>
<View style={{flex:1}}/>
                    <View style={{alignItems:'center',marginBottom:10}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:Color.textColor,fontFamily:Constants.fontFamilyRegular,alignItems:'center'}}>Don’t have an account? </Text>
                            <TouchableOpacity onPress={()=>{
                                this.props.navigation.navigate('RegisterScreen')

                            }} style={{alignItems:'center'}}><Text style={{color:'#fff',fontFamily:Constants.fontFamilyBold}}>Register</Text></TouchableOpacity>
                        </View>
                        <Button1Component extraviewstyle={{width:'90%'}}  title={'Sign in'}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }





}
