import React, {PureComponent} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Config, Device, Styles} from '../app/common';
import MyNetInfoContainer from '../app/container/MyNetInfoContainer';
import MyToast from './container/MyToastContainer';
import Navigation from '../app/navigation';
import {connect} from 'react-redux';
import {initialApp} from '../app/redux/operations';
import { toast} from './Omni';
import FlashMessage,{showMessage} from "react-native-flash-message";
import messaging from "@react-native-firebase/messaging";

@connect(
    null,
    {initialApp},
)
export default class Router extends PureComponent {
    componentDidMount() {
        this.props.initialApp();

    }

    goToScreen = (routeName, params) => {
        if (!this.navigator) {
            return toast('Cannot navigate');
        }
        this.navigator.dispatch({type: 'Navigation/NAVIGATE', routeName, params});

    };



    render() {
          return (
            <View style={Styles.Common.appContainer}>
                <StatusBar
                    hidden={Device.isIphoneX ? false : !Config.showStatusBar}
                />

                <Navigation/>
                <FlashMessage position="top" />
                <MyToast/>
                <MyNetInfoContainer/>
            </View>
        );
    }
}





