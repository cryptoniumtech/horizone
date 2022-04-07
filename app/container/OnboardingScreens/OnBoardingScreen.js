import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View,} from 'react-native';
import PagerView from 'react-native-pager-view';
import connect from "react-redux/lib/connect/connect";
import {onBoardingComplete} from "../../redux/app/actions";
import MyButtonComponent from "../../Components/MyButtonComponent";
import Constants from "../../common/Constants";
import Color from "../../common/Color";
import ProgressiveDots from "./Components/ProgressiveDots";


const onBoardingArray = [{
    title: "What is Horizon?",
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: require('../../Images/onboarding1.png')
},
    {

        title: "How to Earn?",
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: require('../../Images/onboarding2.png')
    }
    ,
    {

        title: "NFT Part",
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: require('../../Images/onboarding3.png')
    }
];

const mapStateToProps = ({user, app}) => ({
    app,
    user
});

@connect(
    mapStateToProps,
    { onBoardingComplete}
)

export default class OnBoardingScreen extends Component {


    constructor(props) {

        super(props);
        this.state = {
            Selected: 0,
        }
        this.pager=React.createRef();


    }


    render() {


        return (
            <SafeAreaView style={{flex:1,backgroundColor:Color.primary,padding:20}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    { this.state.Selected<2?<MyButtonComponent onPress={()=>{
                        this.props.onBoardingComplete(), this.props.navigation.navigate("LoginScreen")
                    }} title={'Skip'} extratextstyle={{paddingHorizontal:30, fontFamily:Constants.fontFamilyMedium,fontSize:12,paddingVertical:3,includeFontPadding:false}} extraviewstyle={{borderWidth:3,borderColor:'#B04041'}}/>:null}
                    <View style={{flex:1}}/>

                    <ProgressiveDots selectedIndex={this.state.Selected}/>
                </View>
                <PagerView ref={this.pager} style={{flex:1}} initialPage={0}>
                    <View key="1">
                        {this.Screen(0)}
                    </View>
                    <View key="2">
                        {this.Screen(1)}
                    </View>
                    <View key="2">
                        {this.Screen(2)}
                    </View>
                </PagerView>



            </SafeAreaView>
        );
    }


   Screen(index) {
        return (

            <View style={{flex: 1,alignItems:'center'}}>
                <Image source={onBoardingArray[index].image} style={{
                    height: '40%',
                    width: undefined,
                    aspectRatio: 1,
                    marginTop: '15%',
                    alignSelf: 'center'
                }}/>

                <Text style={{
                    fontSize: 18,
                    fontFamily:Constants.fontFamilyBold,
                    color: '#fff',
                    marginTop:15,
                    includeFontPadding: false,
                    padding: 0
                }}>{onBoardingArray[index].title}</Text>
                <Text style={{
                    fontSize: 12,
                    paddingHorizontal:'10%',
                    marginTop:15,
                    color: '#fff',
                    fontFamily: Constants.fontFamilyRegular,
                    textAlign: 'center'
                }}>{onBoardingArray[index].description}</Text>

                <View style={{flex:1,backgroundColor:'red',justifyContent:'center'}}>

                </View>
            </View>


        )
    }



}
