import * as a from './actionTypes'

const initialState= [];


export const BooksReducer = (state=initialState,action) => {

    switch (action.type) {
        case a.ADD_BOOK:
            return [...state, action.payload]
            
        case a.DELETE_BOOK:
            return state.filter((book)=> book.id!==action.payload)
            
        case a.ADD_FAVOURITE:
            return state.map((book)=>
            book.id===action.payload?
          {...book,isFavourite:!book.isFavourite}:
          book
        )
        default:
            return state;
    }
}


