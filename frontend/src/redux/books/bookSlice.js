import { createSlice} from "@reduxjs/toolkit";



const initialState =  []



export const BookSlice = createSlice({
    initialState,
    name:"input",
    reducers:{
        addFavourite: (state,action)=>{
           return state.map((book)=>
           book.id===action.payload
           ? {...book, isFavourite : !book.isFavourite}:
           book)

        },

       deleteBook: (state, action)=>{
          const index = state.findIndex((book) =>book.id === action.payload)
          if(index !== -1){
            state.splice(index,1)
          }
        },
        
        addBook: (state,action)=>{
           state.push(action.payload)
        }
}   
})


export const {addFavourite, addBook, deleteBook} = BookSlice.actions 

export default BookSlice.reducer