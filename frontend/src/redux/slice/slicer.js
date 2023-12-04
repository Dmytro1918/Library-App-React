import {createSlice} from "@reduxjs/toolkit"
import { useSelector } from "react-redux"


const initialState = {
    title:"",
    author: "",
    isFavourite:false,
       
    

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
        },
        setFavFilter:(state) => {
            state.isFavourite=!state.isFavourite
        }
    },
})


export const {setTitleFilter, setClearFilter, setNameFilter,setFavFilter}=FilterSlice.actions
export const selectTitleFilter = (state)=>state.filter.title
export const selectNameFilter = (state) => state.filter.author
export const selectFav = (state) => state.filter.isFavourite
export default FilterSlice.reducer;