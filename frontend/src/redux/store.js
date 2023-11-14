import {configureStore} from '@reduxjs/toolkit'
import { BooksReducer } from './books/reducer'

 export const store = configureStore(
    {
        reducer:{
            books:BooksReducer,
          

        }
    }
)