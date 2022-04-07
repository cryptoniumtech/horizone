import * as types from "./types";

/**
 * initial app
 */
export const beginInitApp = () => ({
  type: types.INITIAL_APP,
});
export const loginPending = () => ({
  type: types.LOGIN_FETCHING,
});

export const loading = () => ({
  type: types.FETCHING,
});

export const registerPending = () => ({
  type: types.REGISTER_FETCHING,
});

export const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
  error: true,
});

export const completed = () => ({
  type: types.FAILURE,
});

export const onBoardingComplete = () => ({
  type: types.ONBOARDING_SCREENS,
});
export const loginSuccess = (customerAccessToken, provider) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    accessToken: customerAccessToken,
    provider: provider,
    expiresAt: customerAccessToken,
  },
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
  error: true,
});


export const saveproducts = (data) => ({
  type: types.PRODUCTS,
  payload: data,
});





export const savecategory = (data) => ({
  type: types.CATEGORY,
  payload: data,
});


export const generalDataPending = () => ({
  type: types.GENERAL_DATA_FETCHING,
});
export const getGenralDataSuccess = (generalData) => ({

  type:types.GENERAL_DATA_SUCCESS,
  payload:{
    generalData:generalData,
  }
})

export const getCountryData = (countryData) => ({

  type:types.SAVE_COUNTRY_DATA,
  payload:countryData
})

export const getGenralDataFailure = (error) => ({

  type:types.GENERAL_DATA_FAILURE,
  payload:error,
  error:true,
})
/**
 * intro screen
 */
export const finishIntro = () => ({
  type: types.FINISH_INTRO,
});

export const saveFcmToken = (token) => ({
  type: types.SAVE_FCM_TOKEN,
  payload:token,
});
export const msgCount = (count) => ({
  type: types.MSG_COUNT,
  payload:count,
});

/**
 * notification
 */
export const enableNotification = () => ({
  type: types.NOTIFICATION_ENABLE,
});

export const disableNotification = () => ({
  type: types.NOTIFICATION_DISABLE,
});

export const toggleNotification = (value) => ({
  type: types.NOTIFICATION_TOGGLE,
  payload: {
    value,
  },
});

/**
 * currency
 */
export const changeCurrency = (value) => ({
  type: types.CURRENCY_CHANGE,
  payload: {
    value,
  },
});

/**
 * language
 */
export const changeLanguage = (value) => ({
  type: types.LANGUAGE_CHANGE,
  payload: {
    value,
  },
});

export const changeRtl = (value) => ({
  type: types.LANGUAGE_CHANGE,
  payload: {
    value,
  },
});

/**
 * sidemenu
 */

export const openSidemenu = () => ({
  type: types.SIDEMENU_OPEN,
});

export const closeSidemenu = () => ({
  type: types.SIDEMENU_CLOSE,
});

export const toggleSidemenu = (isOpen) => ({
  type: types.SIDEMENU_TOGGLE,
  payload: {
    isOpen,
  },
});

/**
 * netinfo
 */
export const updateConnectionStatus = (netInfoConnected) => ({
  type: types.UPDATE_CONNECTION_STATUS,
  payload: {
    netInfoConnected,
  },
});

/**
 * toast
 */
export const addToast = (msg, key) => ({
  type: types.ADD_TOAST,
  payload: {
    msg,
    key,
  },
});

export const removeToast = (key) => ({
  type: types.REMOVE_TOAST,
  payload: {
    key,
  },
});
