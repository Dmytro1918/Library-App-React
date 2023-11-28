import {configureStore} from '@reduxjs/toolkit'
import { BooksReducer } from './books/reducer'
import { FilterSlice } from "./slice/slicer"

 export const store = configureStore(
    {
        reducer:{
            filter:FilterSlice.reducer,
            books:BooksReducer,
           
        }
    }
)