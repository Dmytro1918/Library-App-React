import {createSlice} from "@reduxjs/toolkit"
import { useSelector } from "react-redux"


const initialState = {
    title:""
}

 export const FilterSlice = createSlice({
    name:"filter",
    initialState:initialState,
    reducers:{
        setTitleFilter:(state, action)=>{
            return { ...state, title:action.payload }
        },
        setClearFilter:(state)=>{
            return initialState
        }
    },
})


export const {setTitleFilter, setClearFilter}=FilterSlice.actions
export const selectTitleFilter = (state)=>state.filter.title
export default FilterSlice.reducer;