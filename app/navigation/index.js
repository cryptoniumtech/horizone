import React from 'react';
import {View} from 'react-native';
import Splash from '../container/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';
import OnBoardingScreen from "../container/OnboardingScreens/OnBoardingScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();






function AppNavigation() {



    return (


        <Stack.Navigator initialRouteName='Splash'>


            <Stack.Screen name={'Splash'} component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name={'AuthStack'} component={AuthStack} options={{headerShown: false}}/>



        </Stack.Navigator>

    );

}



function AuthStack() {



    return (


        <Stack.Navigator initialRouteName='LoginScreen'>

            <Stack.Screen name={'OnBoardingScreen'} component={OnBoardingScreen} options={{headerShown: false}}/>

            {/*<Stack.Screen name={'LoginLandingScreen'} component={LoginLandingScreen} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'LoginScreen'} component={LoginScreen} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'OnBoardingScreen'} component={OnBoardingScreen} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'VerifyScreen'} component={VerifyScreen} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'ForgotPassword'} component={ForgotPassword} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'ResetPasswordScreen'} component={ResetPasswordScreen} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'MerchentSignupScreen1'} component={MerchentSignupScreen1} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'SignupLandingScreen'} component={SignupLandingScreen} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'AddStoreDetailsScreen'} component={AddStoreDetailsScreen} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'CustomerSignup1'} component={CustomerSignup1} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'VerrfiyScreen'} component={VerrfiyScreen} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={'SignUpDetailScreen'} component={SignUpDetailScreen} options={{headerShown: false}}/>*/}

        </Stack.Navigator>

    );

}



class AppNavigator extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <NavigationContainer ref={navigationRef}>
                    <AppNavigation/>
                </NavigationContainer>
            </View>
        );
    }

};

export default AppNavigator;
