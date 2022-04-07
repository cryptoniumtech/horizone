import * as actions from './actions';
import RestApi from '../../services/restclient/RestApi';
import {toast} from "@app/Omni";
import {getGeneralData} from "../app/operations";
import FormData from 'form-data';
import {Tools} from "../../common";
import axios from "axios";
import firestore from "@react-native-firebase/firestore"
import {
    getCategoriesdata,
    getOffers,
    isFeatchingSucess,
    loginPending,
    loginSuccess,
    saveAdvertisements, saveOffers
} from "./actions";
import {or} from "react-native-reanimated";
import { replace} from "../../navigation/NavigationService";
import {PermissionsAndroid, Platform} from "react-native";
import RNGooglePlaces from "react-native-google-places";


export const login = (params) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('user/login', params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((json) => {

                const {data} = json;



                    dispatch(actions.loginSuccess({data: data?.data}));
dispatch(getPointsPackages(data?.data?.token))

                    return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    toast('Invalid email or password')
                }
                if (error?.response?.status == 400) {
                    toast(error?.response?.data.message)
                }
                else if (error?.response?.status == 404) {
                    toast('Invalid email or password')
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};


export const logout = () => (dispatch) => {
    dispatch(actions.logoutUser());
};





export const MerchantSignup = (params) => (dispatch) => {
    try {

        dispatch(actions.loginPending());

        return RestApi.getInstance().post('user/register', params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((json) => {

                const {data} = json;
                toast('Signup Successfully')
                    dispatch(actions.loginSuccess({data: data?.data}));
                dispatch(getPointsPackages(data?.data?.token))
                    return data?.data;



            })
            .catch((error) => {
                console.log(error)
                if (error?.response?.status == 401) {
                    toast('Something went wrong')
                }
                if (error?.response?.status == 422) {

                    for (let key in error.response.data) {
                        toast(error.response.data[key][0])
                    }
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};


export const getPlacesByLatLng = (lat, lng,api_key) => (dispatch) => {
    const url='https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lng + '&key=' + api_key;
    try {
        return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lng + '&key=' + api_key)
            .then((response) => response.data)
            .then((responseJson) => {
                return responseJson;
            }).catch(error => {
                return undefined;
            });
    } catch (e) {
        return undefined;
    }
};
export const getPlacesByPlacesID = (placeId,api_key) => (dispatch) => {
    try {
        return axios.get('https://maps.googleapis.com/maps/api/geocode/json?place_id=' + placeId + '&key=' + api_key)
            .then((response) => response.data)
            .then((responseJson) => {
                return responseJson;
            }).catch(error => {
                return undefined;
            });
    } catch (e) {
        return undefined;
    }
};

export const getCurrentLoc = (api_key) => async (dispatch) => {
    try {

        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
                    .then(data => {

                        return RNGooglePlaces.getCurrentPlace()
                            .then((results) => {
                                // const url='https://maps.googleapis.com/maps/api/geocode/json?address=' + results[0].location.latitude + ',' + results[0].location.longitude + '&key=' + api_key;
                                return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + results[0].location.latitude + ',' + results[0].location.longitude + '&key=' + api_key)
                                    .then((response) => response.data)
                                    .then((responseJson) => {
                                        return {results, response: responseJson};
                                    });
                            })
                            .catch((error) => {
                                console.log(error)
                                toast('Something went wrong');
                                return undefined;
                            });
                    }).catch(err => {
                        toast('GPS permission denied');
                        return undefined;
                    });
            } else {
                toast('Location permission denied');
                return undefined;
            }
        } else {

            return RNGooglePlaces.getCurrentPlace()
                .then((results) => {
                    return  axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + results[0].location.latitude + ',' + results[0].location.longitude + '&key=' + api_key)
                        .then((response) => response.data)
                        .then((responseJson) => {
                            return {results, response: responseJson};
                        });
                })
                .catch((error) => {
                    console.log(error)
                    toast('Something went wrong');
                    return undefined;
                });
        }
    } catch (e) {
        toast('Something went wrong');
        return undefined;
    }
};
export const updateMerchan = (params,token,user_id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('user/update/'+user_id, params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {

                const {data} = json;

let rawData=data?.data;
rawData.token=token;

                dispatch(actions.loginSuccess({data: rawData}));


                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                if (error?.response?.status == 422) {

                    for (let key in error.response.data) {
                        toast(error.response.data[key][0])
                    }
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};

export const BuyMerchantPackage = (params,token) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('buy/points', params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {

                const {data} = json;

                let rawData=data?.data;
                rawData.token=token;

                dispatch(actions.loginSuccess({data: rawData}));


                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                if (error?.response?.status == 422) {

                    for (let key in error.response.data) {
                        toast(error.response.data[key][0])
                    }
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};


export const getPointsPackages = (token) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().get('get/all/packages', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })
            .then((json) => {

                const {data} = json;
                if (data.status){

                    dispatch(actions.savePointsPackages( data?.data));
                }
                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                else if (error?.response?.status == 404) {
                    toast('User not found ')
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};

export const getAdvitesments = (id,token) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().get('get/all/advertisment/'+id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })
            .then((json) => {

                const {data} = json;
                if (data.status){

                    dispatch(actions.saveAdvertisements( data?.data));
                }
                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                replace('AuthStack',{screen:'LoginScreen'})
                }
                else if (error?.response?.status == 404) {
                    toast('User not found ')
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};

export const deleteAd = (id,token,user_id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().get('delete/advertisment/'+id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })
            .then((json) => {

                const {data} = json;
                if (data.status){

                    dispatch(getAdvitesments(user_id,token));
                }
                return data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                else if (error?.response?.status == 404) {
                    toast('User not found ')
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};
export const AddAdvertisement = (params,token,user_id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('add/advertisment', params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {

                const {data} = json;



                dispatch(getAdvitesments(user_id,token));


                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                if (error?.response?.status == 422) {

                    for (let key in error.response.data) {
                        toast(error.response.data[key][0])
                    }
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};
export const UpdateAdvertisement = (id,params,token,user_id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('update/advertisment/'+id, params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {

                const {data} = json;



                dispatch(getAdvitesments(user_id,token));


                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                if (error?.response?.status == 422) {

                    for (let key in error.response.data) {
                        toast(error.response.data[key][0])
                    }
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};


export const getOffersMerchant = (id,token) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().get('get/all/offer/'+id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })
            .then((json) => {

                const {data} = json;

                if (data.status){

                    dispatch(actions.saveOffers( data?.data));
                }
                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                else if (error?.response?.status == 404) {
                    toast('User not found ')
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};

export const AddOffer = (params,token,user_id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('add/offer', params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {

                const {data} = json;



                dispatch(getOffersMerchant(user_id,token));


                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                if (error?.response?.status == 422) {

                    for (let key in error.response.data) {
                        toast(error.response.data[key][0])
                    }
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};
export const Editoffer = (id,params,token,user_id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('update/offer/'+id, params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {

                const {data} = json;



                dispatch(getOffersMerchant(user_id,token));


                return data?.data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                if (error?.response?.status == 422) {

                    for (let key in error.response.data) {
                        toast(error.response.data[key][0])
                    }
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};
export const deleteOffer = (id,token,user_id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().get('delete/offer/'+id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })
            .then((json) => {

                const {data} = json;
                if (data.status){

                    dispatch(getOffersMerchant(user_id,token));
                }
                return data;



            })
            .catch((error) => {
                if (error?.response?.status == 401) {
                    dispatch(logout())
                    toast('Session expired, Please login again')
                    replace('AuthStack',{screen:'LoginScreen'})
                }
                else if (error?.response?.status == 404) {
                    toast('User not found ')
                } else {
                    toast('Something went wrong, please try later')
                }


                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};

export const getSellerProducts = (userId,token) => (dispatch) => {
    try {


        return RestApi.getInstance().get('getuserstock/' + userId, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {


                if (json.error) {
                    dispatch(actions.loginFailure());

                } else {

                    const {data} = json;

                    // dispatch(actions.getSellerProducts(data.data));


                    return data;

                }
            })
            .catch((error) => {

                dispatch(actions.loginFailure());
                toast('Something went wrong, please try later')
            });


    } catch (error) {
        dispatch(actions.loginFailure());
        toast('Something went wrong, please try later')
    }
};



//
export const getAllProducts = (token) => (dispatch) => {
    try {
        dispatch(actions.loginPending())
        return RestApi.getInstance().get('inventories', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {


                if (json.error) {
                    dispatch(actions.loginFailure());

                } else {

                    const {data} = json;

                    dispatch(actions.getAllProducts(data.data));
                    dispatch(actions.loginFailure());

                    return data;

                }
            })
            .catch((error) => {
                dispatch(actions.loginFailure());
                toast('Something went wrong, please try later')
            });


    } catch (error) {
        dispatch(actions.loginFailure());
        toast('Something went wrong, please try later')
    }
};








export const UpdateUser = (params,id) => (dispatch) => {
    try {
        let form = new FormData();
        for (let key in params) {
            form.append(key, params[key]);
        }

        dispatch(actions.loginPending());

        return RestApi.getInstance().post('users/update/'+id, form, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((json) => {


                if (json.data.success == false) {
                    toast(json.data.message);
                    dispatch(actions.loginFailure(json.data.message));
                    return false;

                } else {
                    const {data} = json;

                    // alert(JSON.stringify(data.access_token))
                    dispatch(actions.loginSuccess(data.data));


                    return true;
                }
            })
            .catch((error) => {
// alert(JSON.stringify(error.response.data))
                toast('Something went wrong, please try later')
                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {
        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};

export const uploadImage = (formData) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('image/upload', formData
        )
            .then((json) => {


                if (json.data.success == false) {
                    toast(json.data.message);
                    dispatch(actions.loginFailure(json.data.message));
                    return false;

                } else {
                    const {data} = json;


                    dispatch(actions.loginFailure());

                    return data;
                }
            })
            .catch((error) => {

                toast('Something went wrong, please try later')
                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {
        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};




export const getUserById = (userId,token) => (dispatch) => {
    try {


        return RestApi.getInstance().get('users/' + userId, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        })
            .then((json) => {



                    const {data} = json;
                    // dispatch(actions.loginFailure());

                    return data?.data;


            })
            .catch((error) => {
                console.log(error.response)
                //dispatch(actions.loginFailure());
                toast('Something went wrong, please try later')
            });


    } catch (error) {
       // dispatch(actions.loginFailure());
        toast('Something went wrong, please try later')
    }
};
export const socialLogin = (params,token) => (dispatch) => {
    try {
        dispatch(actions.loginPending());

        return RestApi.getInstance().post('user/social/login', params, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((json) => {


                if (json.data.success == false) {
                    toast(json.data.message);
                    dispatch(actions.loginFailure(json.data.message));
                    return false;

                } else {
                    const {data} = json;

                    // alert(JSON.stringify(data.access_token))
                    dispatch(actions.loginSuccess(data.data));
                    // dispatch(UpdateUser({device_token:token},data.data.id))


                    return true;
                }
            })
            .catch((error) => {
                toast('Something went wrong, please try later')
                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};







export const doFavUnFav = (params) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        let form = new FormData();
        for (let key in params) {
            form.append(key, params[key]);
        }

        return RestApi.getInstance().post('favorite/update', form )
            .then((json) => {
                dispatch(actions.loginFailure());

                if (json.data.success == false) {
                    toast(json.data.message);

                    return false;

                } else {
                    const {data} = json;


                    dispatch(getFavorite(params.user_id));

                    return true;
                }
            })
            .catch((error) => {
                toast('Something went wrong, please try later')
                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};
export const getFavorite = (userId) => (dispatch) => {
    try {


        return RestApi.getInstance().get('getprofavorite/' + userId, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((json) => {
                dispatch(actions.loginFailure());

                if (json.error) {
                    alert(JSON.stringify(json.data.error))
                } else {
                    const {data} = json;

                    dispatch(actions.favouriteproducts(data));
                    return data;

                }
            })
            .catch((error) => {

                dispatch(actions.loginFailure());
                toast('Something went wrong, please try later')
            });


    } catch (error) {
        dispatch(actions.loginFailure());
        toast('Something went wrong, please try later')
    }
};
export const addOffer = (params) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        let form = new FormData();
        for (let key in params) {
            form.append(key, params[key]);
        }

        return RestApi.getInstance().post('add/offer', form )
            .then((json) => {
                dispatch(actions.loginFailure());

                if (json.data.status == false) {
                    toast(json.data.message);
                    return false;

                } else {
                    const {data} = json;
                    dispatch(getOffer(params.customer_id))
                    toast(json.data.message)
                    //dispatch(loginSuccess(data));

                    return true;
                }
            })
            .catch((error) => {
                toast('Something went wrong, please try later')
                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};

export const UpdateOffer = (params,id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        let form = new FormData();
        for (let key in params) {
            form.append(key, params[key]);
        }

        return RestApi.getInstance().post('updateoffer/'+id, form )
            .then((json) => {

                dispatch(actions.loginFailure());
                if (json.data.status == false) {
                    toast(json.data.message);

                    return false;

                } else {
                    const {data} = json;
                    dispatch(getOffer(params.customer_id))
                    toast(json.data.message)
                    //dispatch(loginSuccess(data));

                    return true;
                }
            })
            .catch((error) => {
                toast('Something went wrong, please try later')
                // alert(JSON.stringify(error))
                toast(error.response.data.errors[0]);
                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};
export const UpdateOfferStatusSeller = (params,id) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        let form = new FormData();
        for (let key in params) {
            form.append(key, params[key]);
        }

        return RestApi.getInstance().post('offerstatus/'+id, form )
            .then((json) => {


                if (json.data.status == false) {
                    toast(json.data.message);
                    dispatch(actions.loginFailure());
                    return false;

                } else {
                    const {data} = json;
                    dispatch(getOffer(params.customer_id))
                    toast(json.data.message)
                    dispatch(actions.loginFailure());

                    return true;
                }
            })
            .catch((error) => {
                toast('Something went wrong, please try later')
                //  alert(JSON.stringify(error.response.data))
                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};
export const checkoutProduct = (params) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        let form = new FormData();
        for (let key in params) {
            form.append(key, params[key]);
        }

        return RestApi.getInstance().post('addto/checkout', form )
            .then((json) => {


                if (json.data.status == false) {
                    toast(json.data.message);
                    dispatch(actions.loginFailure());
                    return false;

                } else {
                    const {data} = json;
                    toast(json.data.message)
                    dispatch(getCheckoutsBuyer(params.customer_id))
                    dispatch(getOffer(params.customer_id))
                    dispatch(actions.loginFailure());

                    return true;
                }
            })
            .catch((error) => {
                toast('Something went wrong, please try later')
                //  alert(JSON.stringify(error.response.data))
                dispatch(actions.loginFailure(JSON.stringify(error)));


            });
    } catch (error) {

        toast('Something went wrong, please try later')
        dispatch(actions.loginFailure(error));
    }


};


export const getOffer = (userId) => (dispatch) => {
    try {


        return RestApi.getInstance().get('getoffer/' + userId, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((json) => {


                if (json.error) {
                    dispatch(actions.loginFailure());

                } else {

                    const {data} = json;

                    dispatch(actions.getOffers(data));
                    dispatch(actions.loginFailure());

                    return data;

                }
            })
            .catch((error) => {

                dispatch(actions.loginFailure());
                toast('Something went wrong, please try later')
            });


    } catch (error) {
        dispatch(actions.loginFailure());
        toast('Something went wrong, please try later')
    }
};

export const getCheckoutsBuyer = (userId) => (dispatch) => {
    try {


        return RestApi.getInstance().get('getcheckout/' + userId, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((json) => {


                if (json.error) {
                    dispatch(actions.loginFailure());
                    // alert(JSON.stringify(json.data.error))
                } else {

                    const {data} = json;

                    dispatch(actions.getCheckouts(data));
                    dispatch(actions.loginFailure());

                    return data;

                }
            })
            .catch((error) => {

                dispatch(actions.loginFailure());
                toast('Something went wrong, please try later')
            });


    } catch (error) {
        dispatch(actions.loginFailure());
        toast('Something went wrong, please try later')
    }
};

export const getOffersByProductID = (productId) => (dispatch) => {
    try {

        dispatch(loginPending())
        return RestApi.getInstance().get('getuseroffer/' + productId, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((json) => {

                dispatch(actions.loginFailure());
                if (json.error) {

                    alert(JSON.stringify(json.data.error))
                } else {
                    const {data} = json;

                    dispatch(actions.getSelling(data));

                    return data;

                }
            })
            .catch((error) => {

                dispatch(actions.loginFailure());
                toast('Something went wrong, please try later')
            });


    } catch (error) {
        dispatch(actions.loginFailure());
        toast('Something went wrong, please try later')
    }
};






//chat work

export const getChatRoom = (userId) => (dispatch) => {
    try {
        dispatch(actions.loginPending())

        console.log( JSON.stringify( firestore().collection('chatRooms').parent))
        firestore().collection('chatRooms').onSnapshot(querySnapshot => {

             let threads = querySnapshot.docs.map(documentSnapshot => {
                 console.log(documentSnapshot.data())
                // if (documentSnapshot.data().buyerId==5||documentSnapshot.data().sellerId==5){
                return {
                    _id: documentSnapshot.id,
                    ...documentSnapshot.data()
                };
            });

            console.log(JSON.stringify(threads))
             if (threads.length>0){
                 dispatch(actions.getAllChatRoom(threads.filter(chat=>chat.buyer==userId || chat.seller==userId)))
             }else {
                 dispatch(actions.getAllChatRoom([]))
             }



        });
    } catch (error) {
        dispatch(actions.loginFailure(error));
    }

};

export const getMessages = (chatRoomId) => (dispatch) => {
    try {
        dispatch(actions.loginPending())
        firestore().collection('chatRooms').doc(chatRoomId).collection('messages').orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
            const threads = querySnapshot.docs.map(documentSnapshot => {
                return {
                    _id: documentSnapshot.id,
                    ...documentSnapshot.data()
                };
            });
            dispatch(actions.getAllMessages(threads))
        });
    } catch (error) {
        dispatch(actions.loginFailure(error));
    }

};
export const createChatRoom = (buyer, seller, navigation) => async (dispatch) => {

    try {

        const chatRoom = await firestore()
            .collection('chatRooms')
            .doc(`${buyer}-${seller}`)
            .get();
        if (chatRoom.data()) {

            navigation.navigate('IndividualChatScreen', {chatItem: {item:{...chatRoom.data(), _id: chatRoom.id}}})
            dispatch(getChatRoom(buyer));
            return true;
        } else {

            const newRoom = await firestore().collection('chatRooms')
                .doc(`${buyer}-${seller}`)
                .set({
                    createdAt: new Date().getTime(),
                    updatedAt: new Date().getTime(),
                    lastMsg: "",
                    buyer:buyer,
                    seller:seller,
                });

            const chatRoom = await firestore()
                .collection('chatRooms')
                .doc(`${buyer}-${seller}`)
                .get();

            navigation.navigate('IndividualChatScreen', {chatItem: {item:{...chatRoom.data(), _id: chatRoom.id}}})
            dispatch(getChatRoom(buyer));
            return true;
        }

    } catch (error) {
// alert(JSON.stringify(error))
        alert(error)

    }
}
export const updateChatRoom = (chatRoomId, updatedData) => (dispatch) => {
    try {
        firestore()
            .collection('chatRooms')
            .doc(chatRoomId)
            .update(updatedData);
    } catch (error) {

    }
}

export const sendMessage = ( chatRoomId, senderId, msg, tokens, chatItem,name,current,second,url,type) => (dispatch) => {
    try {
        firestore()
            .collection('chatRooms')
            .doc(chatRoomId)
            .collection('messages')
            .add({
                senderId,
                createdAt: new Date().getTime(),
                msg,
                type:url?'image':'text',
                url
            });
        sendPushNotification("New message from "+name, msg, tokens, chatItem,current,second)
    } catch (error) {

    }
}

export const sendPushNotification = async (title, body, tokens, chatItem,current,second)=> {
    console.log("data",title+"    "+body+"      "+tokens+"      "+JSON.stringify(chatItem))
    // const dataObj = {...chatItem, type: "ChatScreen"}
    const FIREBASE_API_KEY = "AAAAGSrfF5k:APA91bE_oXkLjUbw7ggK4OquI2UrkQki7DIoLjA6wLM6NtNWnOCOL1EEyWI6EvIMGRshFsHxPxooLhJYOKTea1uZS7OHYswKm3uLQyn-a-lv4hJjCUo84QKJO-3Zmx-yVW_KvYlsO_oX"
    var bodyObj = {
        to: tokens,
        notification: {
            title: title,
            body: body,
        },
        data:{
            chatItem: {item:chatItem,currentUser:second,secondUser:current},
            type:"IndividualChatScreen"
        }

    };

    fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "key= "+FIREBASE_API_KEY
        },
        body: JSON.stringify(bodyObj),
    }).then(value => {
        console.log("notification",JSON.stringify(value))
    }).catch(err => {
        console.log(JSON.stringify(err))
    })

}
