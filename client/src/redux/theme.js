import {createSlice} from "@reduxjs/toolkit";
import { dispatch } from "./store";
const initialState={
  theme:JSON.parse(window?.localStorage.getItem("theme"))??"dark",
};

const themeSlice =createSlice({
  name:"theme",
  initialState,
  reducers:{
    setTheme(state,action){
      state.theme=action.PAyLOAD;
      localStorage.setItem("theme",JSON.stringify(action.payload));
    },
  },
});

export default themeSlice.reducer;

export function SetTheme(value){
  return(dispatch)=>{
    dispatch(themeSlice.actions.setTheme(value));
  };
}