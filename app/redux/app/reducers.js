import * as types from "./types";

const initialState = {
    finishIntro: false,
    generalData: [],
    regions:[],
    category:[],
    products:[],
    countryData:[],
    onBoarding:false,
    language: {
        enableNotification: false,
        fcmToken:"",
        lang: "en",
        rtl: false,
    },
    isFetching: false,
    isOpenSidemenu: false,
    netInfoConnected: true,
    toast: {
        list: [],
    },
    msgCount:0
};

export default (state = initialState, action) => {
    const {type, payload, error, meta} = action;
    switch (type) {
        case types.FINISH_INTRO: {
            return {
                ...state,
                finishIntro: true,
            };
        }
        case types.SAVE_FCM_TOKEN:{
            return {
                ...state,
                fcmToken:payload,
            }
        }

        case types.MSG_COUNT:{
            return {
                ...state,
                msgCount:payload,
            }
        }
        case types.CATEGORY:{

            return {
                ...state,
                category: payload.data,
            }
        }

        case types.PRODUCTS:{

            return {
                ...state,
                products: payload,
            }
        }

        case types.ONBOARDING_SCREENS:{

            return {
                ...state,
                onBoarding: true,
            }
        }

        case types.SAVE_COUNTRY_DATA:{

            return {
                ...state,
                countryData: payload,

            }
        }
        case types.FAVOURITEPRODUCTS:{

            return {
                ...state,
                favouriteproducts: payload.data,
            }
        }

        case types.GENERAL_DATA_FETCHING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case types.GENERAL_DATA_SUCCESS: {
            return {
                ...state,
                regions:payload.generalData,
                isFetching:false,
                error: null,
            };
        }
        case types.GENERAL_DATA_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        case types.NOTIFICATION_ENABLE: {
            return {
                ...state,
                enableNotification: true,
            };
        }

        case types.NOTIFICATION_DISABLE: {
            return {
                ...state,
                enableNotification: false,
            };
        }

        case types.NOTIFICATION_TOGGLE: {
            return {
                ...state,
                enableNotification: payload.value,
            };
        }


        case types.LANGUAGE_CHANGE: {
            // alert(JSON.stringify(payload.value))
            return {
                ...state,
                language: {
                    ...payload.value,
                },
            };
        }

        case types.RTL_CHANGE: {
            return {
                ...state,
                ...payload.value,

            };
        }

        /**
         * sidemenu
         */
        case types.SIDEMENU_OPEN: {
            return {
                ...state,
                isOpenSidemenu: true,
            };
        }

        case types.SIDEMENU_CLOSE: {
            return {
                ...state,
                isOpenSidemenu: false,
            };
        }

        case types.SIDEMENU_TOGGLE: {
            if (!payload || (payload && typeof payload.isOpen === "undefined")) {
                alert("sidemenu")
                return {
                    ...state,
                    isOpenSidemenu: !state.isOpenSidemenu,
                };
            }
            return {
                ...state,
                isOpenSidemenu: payload.isOpen,
            };
        }

        case types.UPDATE_CONNECTION_STATUS: {
            return {
                ...state,
                netInfoConnected: payload.netInfoConnected,
            };
        }

        case types.ADD_TOAST: {
            return {
                ...state,
                toast: {
                    list: state.toast.list.some((toast) => toast.msg === payload.msg)
                        ? state.toast.list
                        : [payload, ...state.toast.list],
                },
            };
        }
        case types.REMOVE_TOAST: {
            return {
                ...state,
                toast: {
                    list: state.toast.list.filter((msg) => msg.key !== payload.key),
                },
            };
        }

        default:
            return state;
    }
};
