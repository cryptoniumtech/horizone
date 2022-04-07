import React from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "../container/HomeScreen/HomeScreen";
import LinearGradient from "react-native-linear-gradient";
import Color from "../common/Color";
import UserHomeScreen from "../container/HomeScreen/UserScreens/UserHomeScreen";
import {EventRegister} from "react-native-event-listeners";
import MapScreeen from "../container/HomeScreen/UserScreens/MapScreeen";
import MyProfileScreen from "../container/HomeScreen/MyProfileScreen";
import MyPointsScreen from "../container/HomeScreen/UserScreens/MyPointsScreen";
import UserProfileScreen from "../container/HomeScreen/UserScreens/UserProfileScreen";

const Tab = createBottomTabNavigator();
const tabIcons=[{icon:require('../Images/pointsbottom.png'),style:{width:20,aspectRatio:1}},{icon:require('../Images/mapbottom.png'),style:{width:20,aspectRatio:0.78}},{icon:require('../Images/homebottom.png'),style:{width:20,aspectRatio:1}},{icon:require('../Images/offersbottom.png'),style:{width:20,aspectRatio:1}},{icon:require('../Images/profilebottom.png'),style:{width:20,aspectRatio:1}}]

const   AppBottomTab = () => {
    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            tabBarOptions={{

                style: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    borderTopWidth: 0,
                    elevation: 0,
                },
                showLabel: false
            }}
            theme={{colors:{backgroundColor: 'transparent'}}}
            sceneContainerStyle={{backgroundColor: 'transparent'}}
            initialRouteName={'HomeUser'}
            backBehavior={'none'}
            lazy={false}


        >

            <Tab.Screen name={'PointsUser'} component={MyPointsScreen}/>
            <Tab.Screen name={'MapUser'} component={MapScreeen}/>
            <Tab.Screen name={'HomeUser'} component={UserHomeScreen}/>
            <Tab.Screen name={'OfferUser'} component={HomeScreen}/>
            <Tab.Screen name={'ProfileUser'} component={UserProfileScreen}/>


        </Tab.Navigator>
    );
};



function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View  style={{ flexDirection: 'row',backgroundColor:Color.primary,paddingVertical:15 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    if (route.name=='OfferUser'){
                        EventRegister.emit('showPromotion')

                        return
                    }

                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{backgroundColor:'transparent' ,flex: 1,justifyContent:'center',alignItems:'center' }}
                    >

                        <Image source={tabIcons[index].icon} style={{height:isFocused ?tabIcons[index].style.width+10:tabIcons[index].style.width,width:undefined,aspectRatio:tabIcons[index].style.aspectRatio}}/>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


export default AppBottomTab
