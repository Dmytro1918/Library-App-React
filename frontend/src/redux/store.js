import {configureStore} from '@reduxjs/toolkit'
import { FilterSlice } from "./slice/slicer"
import { BookSlice } from './books/bookSlice'

 export const store = configureStore(
    {
        reducer:{
            filter:FilterSlice.reducer,
            books:BookSlice.reducer,
           
        }
    }
)