import React, {Component} from 'react';
import {Image, ImageBackground, StatusBar, Text, View,} from 'react-native';
import {connect} from 'react-redux';
import messaging from "@react-native-firebase/messaging";
import {showMessage} from "react-native-flash-message";
import Color from "../common/Color";
import Constants from "../common/Constants";


const mapStateToProps = ({app, user}) => ({
    app,
    user,
    onBoarding:app.onBoarding,

});

@connect(
    mapStateToProps,
    {}
)



export default class AppIntro extends Component {


    constructor(props) {
        super(props);
        this.messagingListnerInit()
        // this.selectedLanguage('ar',true)
    }

    messagingListnerInit() {
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    if (remoteMessage && remoteMessage.data) {

                        if (this.props.user.userInfo) {
                            {
                                if (remoteMessage.data) {
                                    this.props.navigation.navigate("IndividualChatScreen", {chatItem: JSON.parse(remoteMessage.data.chatItem)})
                                }
                            }
                        }else {
                            setTimeout(() => {
                                if (this.props.user?.accessToken != null) {
                                    this.props.navigation.replace('HomeScreen');
                                } else {
                                    this.props.navigation.replace('SignupSigninScreen');
                                }
                            }, 3000)
                        }
                    }else {
                        setTimeout(() => {
                            if (this.props.user?.accessToken != null) {
                                this.props.navigation.replace('HomeScreen');
                            } else {
                                this.props.navigation.replace('SignupSigninScreen');
                            }
                        }, 3000)
                    }
                }
            });


        messaging().onMessage(async remoteMessage => {
            if (remoteMessage && remoteMessage.data) {
                if (remoteMessage.data) {
                    showMessage({
                        icon: 'success',
                        duration: 8000,
                        floating: true,
                        message: remoteMessage.notification.title,
                        description: remoteMessage.notification.body,
                        type: "success",
                        onPress: () => {
                            if (remoteMessage.data) {
                                // this.props.navigation.navigate("IndividualChatScreen", {chatItem: JSON.parse(remoteMessage.data.chatItem)})
                            }

                        }
                    });
                }
            }
        });

    }


    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {

    }

componentDidMount() {
    setTimeout(() => {
        if (this.props.userInfo != null) {
            this.props.navigation.replace('UserStack');
        } else {

            if (this.props.app?.onBoarding){

            this.props.navigation.replace('AuthStack');}
            else{
                this.props.navigation.replace('AuthStack',{screen:'OnBoardingScreen'});
            }
        }
    }, 300)
}

    render() {
        return (

<>

    <StatusBar translucent backgroundColor='transparent' />



           <View style={{backgroundColor:Color.primary,flex:1,justifyContent:'center',alignItems:'center'}}>
               <Image style={{width:'90%',height:undefined,aspectRatio:3.70}} source={require('../Images/splashLogo.png')}/>


           </View>

</>
        );
    }

}

