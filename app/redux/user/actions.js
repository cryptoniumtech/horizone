/**
 * created by Inspire UI @author(dang@inspireui.com)
 * @format
 */

import * as types from "./types";
import {GET_ALL_PRODUCTS} from "./types";

/**
 * login user
 */
export const loginPending = () => ({
    type: types.LOGIN_FETCHING,
});

export const loading = () => ({
    type: types.FETCHING,
});
export const completed = () => ({
    type: types.FAILURE,
});
export const loginSuccess = (userData) => ({
    isFetching:false,
    type: types.LOGIN_SUCCESS,
    payload: {
        userData: userData,

    },
});
export const saveAdvertisements = (advertisements) => ({
    isFetching:false,
    type: types.ADVERTISEMENT_SUCCESS,
    payload: {
        advertisements: advertisements,

    },
});

export const saveOffers = (offers) => ({
    isFetching:false,
    type: types.OFFERS_SUCCESS,
    payload: {
        offers: offers,

    },
});

export const savePointsPackages = (packages) => ({
    isFetching:false,
    type: types.GET_PACKAGES_SUCCESS,
    payload: {
        packages: packages,

    },
});
export const loginFailure = (error) => ({
    type: types.LOGIN_FAILURE,
    payload: error,
    error: true,
});






/**
 * register user
 */
export const projectListPending = () => ({
    type: types.PROJECT_LIST_FETCHING,
});

export const projectListSuccess = (data) => ({

    type:types.PROJECT_LIST_SUCCESS,
    payload:{
        projectList:data,
    }
});

export const projectListFailure = (error) => ({

    type:types.PROJECT_LIST_FAILURE,
    payload:error,
    error:true,
})

export const freelancerListPending = () => ({
    type: types.FREELANCER_LIST_FETCHING,
});

export const freelancerListSuccess = (data) => ({

    type:types.FREELANCER_LIST_SUCCESS,
    // payload:{
    //     projectList:data,
    // }
})

export const freelancerListFailure = (error) => ({

    type:types.FREELANCER_LIST_FAILURE,
    payload:error,
    error:true,
})


export const addSeekerProjectPending = () => ({
    type: types.ADD_SEEKER_PROJECT_FETCHING,
});

export const addSeekerProjectSuccess = () => ({
    type: types.ADD_SEEKER_PROJECT_SUCCESS,
});

export const addSeekerProjectFailure = (error) => ({
    type: types.ADD_SEEKER_PROJECT_FAILURE,
    payload: error,
    error: true,
});

export const registerPending = () => ({
    type: types.REGISTER_FETCHING,
});

export const registerSuccess = (data) => ({
    isFetching:false,
    type: types.REGISTER_SUCCESS,
    payload: data,
});

export const registerFailure = (error) => ({
    type: types.REGISTER_FAILURE,
    payload: error,
    error: true,
});
export const isFeatchingSucess = (data) => ({
    type: types.FETCHING,
    payload: data,
});

export const isFeatchingFail = (error) => ({
    type: types.FAILURE,
    payload: error,
    error: true,
});
export const postItemSuccess = (data) => ({
    type: types.POST_ITEM_SUCCESS,
    payload: data,
});

export const postItemFailure = (error) => ({
    type: types. POST_ITEM_FAILURE,
    payload: error,
    error: true,
});
export const editProfilePending = () => ({
    type: types.EDIT_PROFILE_FETCHING,
});

export const editProfileSuccess = () => ({
    type: types.EDIT_PROFILE_SUCCESS,
    // payload:{
    //   user,
    // }
});

export const editProfileFailure = (error) => ({
    type: types.EDIT_PROFILE_FAILURE,
    payload: error,
    error: true,
});

export const savePatientAppointments = (data) => ({
    type: types.PATIENT_APPOINTMENTS_SUCCESS,
    payload: data,
    error: true,
});

export const saveOnlineDoctors = (data) => ({
    type: types.SAVE_ONLINE_DOCTORS,
    payload: data,
    error: true,
});
/**
 * register user
 */
export const userInfoPending = () => ({
    type: types.USER_INFO_FETCHING,
});
export const favouriteproducts = (data) => ({
    type: types.FAVOURITEPRODUCTS,
    payload: data,
});


export const getOffers = (data) => ({


    type: types.GETOFFERPRODUCTS,
    payload: data,
});


export const getSellerProducts = (data) => ({


    type: types.GET_SELLER_PRODUCTS,
    payload: data,
});

export const getAllProducts = (data) => ({


    type: types.GET_ALL_PRODUCTS,
    payload: data,
});

export const getCategoriesdata = (data) => ({


    type: types.GET_CATEGORIES_DATA,
    payload: data,
});
export const getCategory = (data) => ({


    type: types.GET_CATEGORIES_DATA,
    payload: data,
});
export const getCheckouts = (data) => ({


    type: types.GET_CHECKOUTS,
    payload: data,
});
export const getSelling = (data) => ({

    type: types.GETSELLINGPRODUCTS ,
    payload: data,
});
export const userInfoSuccess = (user) => ({
    type: types.USER_INFO_SUCCESS,
    payload: {
        user,
    },
});

export const userInfoFailure = (error) => ({
    type: types.USER_INFO_FAILURE,
    payload: error,
    error: true,
});

/**
 * logout
 */
export const logoutUser = () => ({
    isFetching:false,
    type: types.LOGOUT,
});

/**
 * create user address
 */
export const createUserAddressPending = () => ({
    type: types.USER_CREATE_ADDRESS_FETCHING,
});

export const createUserAddressSuccess = (address) => ({
    type: types.USER_CREATE_ADDRESS_SUCCESS,
    payload: {
        address,
        id: address.id ? address.id : "",
    },
});

export const createUserAddressFailure = (error) => ({
    type: types.USER_CREATE_ADDRESS_FAILURE,
    payload: error,
    error: true,
});

/**
 * update user address
 */
export const updateUserAddressPending = () => ({
    type: types.USER_UPDATE_ADDRESS_FETCHING,
});

export const updateUserAddressSuccess = (address, id) => ({
    type: types.USER_UPDATE_ADDRESS_SUCCESS,
    payload: {
        address,
        id,
    },
});

export const updateUserAddressFailure = (error) => ({
    type: types.USER_UPDATE_ADDRESS_FAILURE,
    payload: error,
    error: true,
});

/**
 * update user default address
 */
export const updateUserDefaultAddressPending = () => ({
    type: types.USER_UPDATE_DEFAULT_ADDRESS_FETCHING,
});

export const updateUserDefaultAddressSuccess = (user) => ({
    type: types.USER_UPDATE_DEFAULT_ADDRESS_SUCCESS,
    payload: {
        user,
    },
});

export const updateUserDefaultAddressFailure = (error) => ({
    type: types.USER_UPDATE_DEFAULT_ADDRESS_FAILURE,
    payload: error,
    error: true,
});

/**
 * delete user address
 */
export const deleteUserAddressPending = () => ({
    type: types.USER_DELETE_ADDRESS_FETCHING,
});

export const deleteUserAddressSuccess = (id) => ({
    type: types.USER_DELETE_ADDRESS_SUCCESS,
    payload: {
        id,
    },
});

export const deleteUserAddressFailure = (error) => ({
    type: types.USER_DELETE_ADDRESS_FAILURE,
    payload: error,
    error: true,
});
export const portfolioPending = () => ({
    type: types.ADD_PORTFOLIO_FETCHING
});
export const portfolioSuccess = () => ({
    type: types.ADD_PORTFOLIO_SUCCESS
});
export const portfolioFailure = (error) => ({
    type: types.ADD_PORTFOLIO_FAILURE,
    payload: error,
    error: true,
});
export const followUserPending = () => ({
    type: types.FOLLOW_USER_FETCHING
});
export const followUserSuccess = () => ({
    type: types.FOLLOW_USER_SUCCESS
});
export const followUserFailure = (error) => ({
    type: types.FOLLOW_USER_FAILURE,
    payload: error,
    error: true,
});



// chat work

export const getAllChatRoom = (chat) => ({
    type: types.GET_CHAT_ROOM_LIST,
    payload: chat,
});

export const getAllMessages = (chat) => ({
    type: types.GET_ALL_CHAT,
    payload: chat,
});
