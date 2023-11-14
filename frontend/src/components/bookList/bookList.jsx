import { useDispatch, useSelector } from 'react-redux'
import './bookList.css'
import { useState } from 'react'
import { deleteBook } from '../../redux/books/actionCreators'

export function BookList  () {
    let  books = useSelector((state)=>state.books)
   
    const dispatch = useDispatch()

    const handleDelete = (ID) => {
        dispatch(deleteBook(ID))
    }

    return(
        
            <div className="app-block book-list">
                <h2> Book List </h2>
                {books.length===0 ? (
                    <p>No books available</p>)
                    : (<ul>
                        {
                        books.map((book, i)=>
                            <li key={i}>
                                <div className='book-info'>{++i}. {book.title} by <strong>{book.author}</strong>
                                </div>
                                <button className='book-actions' onClick={()=>handleDelete(book.id)}>Delete</button>
                            </li>)
                        }
                    </ul> )
                }
            </div>
           
       
    )
}

