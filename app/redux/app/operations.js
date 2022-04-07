import {I18nManager} from 'react-native'
import * as actions from "./actions";
import { CommonActions } from '@react-navigation/native';
import RestApi from "../../services/restclient/RestApi";
import {toast, Validate} from "@app/Omni";
import {getCountryData} from "./actions";

export const initialApp = () => (dispatch) => {
    dispatch(actions.beginInitApp());
};

export const switchLanguage=(isRtl)=>(dispatch)=>{
    I18nManager.forceRTL(isRtl);
    dispatch(actions.changeLanguage({ lang: isRtl==true?"ar":"en", rtl:isRtl}))
}

export const finishIntro=()=>(dispatch)=>{
    dispatch(actions.finishIntro())
    // dispatch(CommonActions.navigate({
    //   name: 'Login'
    // }))
}

export const saveFCM=(token)=>(dispatch)=>{
    dispatch(actions.saveFcmToken(token))

    // dispatch(CommonActions.navigate({
    //   name: 'Login'
    // }))
}
export const saveMsgCount=(count)=>(dispatch)=>{
    dispatch(actions.msgCount(count))

    // dispatch(CommonActions.navigate({
    //   name: 'Login'
    // }))
}

Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (arr.filter(item=>item.country_id==this[i].country_id).length<1) {
            arr.push(this[i]);
        }
    }
    return arr;
}
export const getCityCountryData=() => (dispatch)=>{
    try {


        return  RestApi.getInstance().get('cities',{headers:{'Accept':'application/json'}})

            .then((json)=>{

                const {data} = json;
                if (data?.data) {

                    let citiesData=JSON.parse(JSON.stringify(data?.data));
                    let countries=[];
                    for (let city of citiesData.unique()){
                        let country=JSON.parse(JSON.stringify(city.country))
                        country={...country,cities: data?.data.filter(item=>item.country_id==country.id)}
                        countries.push(country)
                    }

                    dispatch(actions.getCountryData(countries))
                    // alert(JSON.stringify(countries))
                }

            })
            .catch((error) => {
                // dispatch(actions.getGenralDataFailure(error));
                // toast(JSON.stringify(error))
            });
    }
    catch (e) {

        // toast(JSON.stringify(e.message))
    }
    //dispatch(actions.getGenralDataSuccess())


}




export const getGeneralData=() => (dispatch)=>{
    try {
        dispatch(actions.generalDataPending());

        return  RestApi.getInstance().get('regions',{headers:{'Accept':'application/json'}})

            .then((json)=>{
                if (json.error){
                    dispatch(actions.getGenralDataFailure(json.data.error))
                    toast(JSON.stringify(json.data.error))
                } else{
                    const {data} = json;
                    // alert(JSON.stringify(data))
                    dispatch(actions.getGenralDataSuccess(data.data))
                    // alert(JSON.stringify(data))
                }
            })
            .catch((error) => {
                dispatch(actions.getGenralDataFailure(error));
                toast(JSON.stringify(error))
            });
    }
    catch (e) {
        dispatch(actions.getGenralDataFailure(e));
        toast(JSON.stringify(e.message))
    }
    //dispatch(actions.getGenralDataSuccess())


}


export const itemcategory = () => (dispatch) => {
    try {

        return RestApi.getInstance().get('getcategory', {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((json) => {


                if (json.error) {
                    alert(JSON.stringify(json.data.error))
                } else {
                    const {data} = json;



                    dispatch(actions.savecategory(data));
                    return data;

                }
            })
            .catch((error) => {


                toast(JSON.stringify(error))
            });


    } catch (error) {

        toast(error.message)
    }
};


export const saveproducts  = (categoty_id) => (dispatch) => {
    try {

        return RestApi.getInstance().get('getproduct/'+categoty_id, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((json) => {


                if (json.error) {
                    alert(JSON.stringify(json.data.error))
                } else {
                    const {data} = json;


                    dispatch(actions.saveproducts(data));
                    return data;

                }
            })
            .catch((error) => {


                toast(JSON.stringify(error))
            });


    } catch (error) {

        toast(error.message)
    }
};


