import { createSlice } from "@reduxjs/toolkit";



export const ItemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, sortArr: [...state.sortArr, { ...action.payload }] };

      case "REMOVE_ITEM":
      return{...state,sortArr:state.sortArr.filter((curEle)=>curEle.id!==action.payload)};

      case "REMOVE_ALL_ITEMS":
        return {...state,sortArr:[]};

    default:
      return state;
  }
};
