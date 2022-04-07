/**
 * created by Inspire UI @author(dang@inspireui.com)
 * @format
 */

import * as types from "./types";
import { addAndUpdateUserAddress, deleteUserAddress } from "./utils";
import {ActivityIndicator} from "react-native";
import globals from "../../common/globals";
import React from "react";

const initialState = {
  userInfo: null,
  accessToken: null,
  onlineDoctors:[],
  loading:false,
  advertisements: [],
  merchantOffers:[],
  merchantPackages:[],
  favouriteproducts:[],
  buyerOfferProduct:[],
  sellerProdutcs:[],
  checkouts:[],
  categoriesData:[],
  getSellingProduct:[],
  getInventories:[],
  getAllProducte:[],
  category:[],
  products:[],
  patientAppointments:[],
  seekerProjectList:null,
  expiresAt: null,
  provider:null,
  isFetching: false,
  error: null,

  chatRoomList:[],
  chatList:[],
};

export default (state = initialState, action) => {
  const { type, payload, error, meta } = action;

  switch (type) {
    case types.USER_CREATE_ADDRESS_FETCHING:
    case types.USER_DELETE_ADDRESS_FETCHING:
    case types.USER_UPDATE_ADDRESS_FETCHING:
    case types.USER_UPDATE_DEFAULT_ADDRESS_FETCHING:
    case types.LOGIN_FETCHING:
    case types.REGISTER_FETCHING:
    case types.EDIT_PROFILE_FETCHING:
    case types.ADD_PORTFOLIO_FETCHING:
    case types.ADD_SEEKER_PROJECT_FETCHING:
    case types.PROJECT_LIST_FETCHING:
    case types.FREELANCER_LIST_FETCHING:
    case types.FOLLOW_USER_FETCHING:

    case types.USER_INFO_FETCHING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case types.USER_CREATE_ADDRESS_FAILURE:
    case types.USER_DELETE_ADDRESS_FAILURE:
    case types.USER_UPDATE_ADDRESS_FAILURE:
    case types.USER_UPDATE_DEFAULT_ADDRESS_FAILURE:
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
    case types.ADD_PORTFOLIO_FAILURE:
    case types.EDIT_PROFILE_FAILURE:
    case types.ADD_SEEKER_PROJECT_FAILURE:
    case types.PROJECT_LIST_FAILURE:
    case types.FREELANCER_LIST_FAILURE:
    case types.FOLLOW_USER_FAILURE:
    case types.USER_INFO_FAILURE: {

      return {
        ...state,
        isFetching: false,
      };
    }
    case types.GET_CATEGORIES_DATA:{
      return {
        ...state,
        //userInfo:payload.data,
        categoriesData:payload,
        error: null,
      }
    }
    case types.ADVERTISEMENT_SUCCESS:{
      return {
        ...state,
        //userInfo:payload.data,
        advertisements:payload.advertisements,
        error: null,
      }
    }
    case types.OFFERS_SUCCESS:{
      return {
        ...state,
        //userInfo:payload.data,
        merchantOffers:payload.offers,
        error: null,
      }
    }
    case types.GET_PACKAGES_SUCCESS:{
      return {
        ...state,
        //userInfo:payload.data,
        merchantPackages:payload.packages,
        error: null,
      }
    }
    case types.FAILURE: {

      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case types.FETCHING: {

      return {
        ...state,
        loading: true,
        error: payload,
      };
    }



    case types.FREELANCER_LIST_SUCCESS:{
      return {
        ...state,
        //userInfo:payload.data,
        isFetching:false,
        error: null,
      }
    }

    case types.GET_SELLER_PRODUCTS:{
      return {
        ...state,
        //userInfo:payload.data,
        sellerProdutcs:payload,
        isFetching:false,
        error: null,
      }
    }

    case types.GET_ALL_PRODUCTS:{
      return {
        ...state,
        //userInfo:payload.data,
        getAllProducte:payload,
        isFetching:false,
        error: null,
      }
    }
    case types.Get_Category:{
      return {
        ...state,
        //userInfo:payload.data,
        category:payload,
        isFetching:false,
        error: null,
      }
    }
    case types.EDIT_PROFILE_SUCCESS:{
      return {
        ...state,
        //userInfo:payload.data,
        isFetching:false,
        error: null,
      }
    }
    case types.PATIENT_APPOINTMENTS_SUCCESS:{
      return {
        ...state,
        patientAppointments:payload,
        loading:false,
        error: null,
      }
    }
    case types.ADD_PORTFOLIO_SUCCESS:{
      return {
        ...state,
        isFetching:false,
        error: null,
      }
    }

    case types.FOLLOW_USER_SUCCESS:{
      return {
        ...state,
        isFetching:false,
        error: null,
      }
    }
    case types.ADD_SEEKER_PROJECT_SUCCESS:{
      return {
        ...state,
        //userInfo:payload.data,
        isFetching:false,
        error: null,
      }
    }
    case types.PROJECT_LIST_SUCCESS: {
      return {
        ...state,
        // allProjects:payload,
        seekerProjectList:payload,
        isFetching:false,
        error: null,
      };
    }
    case types.POST_ITEM_SUCCESS: {
      return {
        ...state,
        // allProjects:payload,
        isFetching:false,
        error: null,
      };
    }
    case types.POST_ITEM_FAILURE: {
      return {
        ...state,
        // allProjects:payload,
        isFetching:false,
        error: null,
      };
    }
    case types.LOGIN_SUCCESS: {


      return {
        ...state,
        userInfo: payload.userData.data,
        accessToken:payload.userData.token,
        isFetching: false,
        error: null,
      };
    }



    case types.SAVE_ONLINE_DOCTORS: {
      return {
        ...state,
        onlineDoctors: payload,
        error: null,
      };
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,

        isFetching: false,
        error: null,
      };
    }

    case types.USER_UPDATE_DEFAULT_ADDRESS_SUCCESS:
    case types.USER_INFO_SUCCESS: {
      return {
        ...state,
        userInfo: payload.user,
        isFetching: false,
        error: null,
      };
    }

    case types.USER_CREATE_ADDRESS_SUCCESS:
    case types.USER_UPDATE_ADDRESS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        userInfo: addAndUpdateUserAddress({
          userInfo: state.userInfo,
          address: payload.address,
          id: payload.id,
        }),
      };
    }

    case types.USER_DELETE_ADDRESS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        userInfo: deleteUserAddress({
          id: payload.id,
          userInfo: state.userInfo,
        }),
      };
    }
    case types.FAVOURITEPRODUCTS: {


      return {
        ...state,
        favouriteproducts: payload,
      }
    }
    case types.GETOFFERPRODUCTS: {
      return {
        ...state,
        isFetching:false,
        buyerOfferProduct: payload,

      }
    }
    case types.GETSELLINGPRODUCTS: {


      return {
        ...state,
        isFetching:false,
        getSellingProduct: payload,

      }
    }
    case types.GET_Inventories: {


      return {
        ...state,
        isFetching:false,
        getInventories: payload,

      }
    }
    case types.GET_CHECKOUTS: {


      return {
        ...state,
        isFetching:false,
        checkouts: payload,

      }
    }




    case types.GET_CHAT_ROOM_LIST: {
      return {
        ...state,
        isFetching: false,
        error: null,
        chatRoomList: payload
      };
    }

    case types.GET_ALL_CHAT: {
      return {
        ...state,
        isFetching: false,
        error: null,
        chatList: payload
      };
    }

    case types.LOGOUT: {
      return {
        isFetching: false,
        ...initialState,
      };
    }

    default:
      return state;
  }
};
