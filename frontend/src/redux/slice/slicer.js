import {createSlice} from "@reduxjs/toolkit"
import { useSelector } from "react-redux"


const initialState = {
    title:"",
    author: "",

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
        },
        setNameFilter:(state, action) => {
            return { ...state, author:action.payload}
        }
    },
})


export const {setTitleFilter, setClearFilter, setNameFilter}=FilterSlice.actions
export const selectTitleFilter = (state)=>state.filter.title
export const selectNameFilter = (state) => state.filter.author
export default FilterSlice.reducer;