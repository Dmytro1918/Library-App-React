import { useDispatch, useSelector } from 'react-redux'
import './bookList.css'
import { useState } from 'react'
import { deleteBook, toggleFavourite } from '../../redux/books/actionCreators'
import { BiSolidArchiveIn, BiSolidBeenHere  } from "react-icons/bi";
import { selectTitleFilter, selectNameFilter,selectFav } from '../../redux/slice/slicer';


export function BookList  () {
    let books = useSelector((state)=>state.books)
    const titleFilter = useSelector(selectTitleFilter)
    const nameFilter = useSelector(selectNameFilter)
    const favBook = useSelector(selectFav)
    const dispatch = useDispatch()


    const filteredBooks = books.filter((book)=> {
        
        const matchedByTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
        const matchedByName = book.author.toLowerCase().includes(nameFilter.toLowerCase())
       
    return (!favBook || book.isFavourite) && matchedByTitle && matchedByName
    }) 
    

    const handleDelete = (ID) => {
        dispatch(deleteBook(ID))
    }
    const handleFavourite = (ID) => {
        dispatch(toggleFavourite(ID))
    }

    const highlightedText = (enteredText, searchText) => {
        const lowerCaseText = enteredText.toLowerCase()
        const lowerCaseSearchItem = searchText.toLowerCase()

        const startIndex = lowerCaseText.indexOf(lowerCaseSearchItem)
        if(startIndex===-1) return enteredText

        const endIndex = startIndex + searchText.length
        const highlightedText =
        enteredText.substring(0, startIndex) +
            `<span class="highlight">${enteredText.substring(startIndex, endIndex)}</span>` +
            enteredText.substring(endIndex);

    return highlightedText;

    }

    return(
        
            <div className="app-block book-list">
                <h2> Book List </h2>
                {books.length===0 || filteredBooks.length===0 ? (
                    <p>No books available</p>)
                    : (<ul>
                        {
                        filteredBooks.map((book, i)=>
                            <li key={i}>
                                <div className='book-info'>{++i}
                                {'. '}
                                <span dangerouslySetInnerHTML={{ __html: highlightedText(book.title, titleFilter)}}></span>
                                    {' by '}
                                <strong  dangerouslySetInnerHTML={{__html:highlightedText(book.author,nameFilter)}}/>
                                </div>
                               {book.isFavourite ? 
                               <BiSolidBeenHere onClick={()=>handleFavourite(book.id)} className='star-icon'/>
                               :
                               <BiSolidArchiveIn onClick={()=>handleFavourite(book.id)} className='star-icon'/>
                               }

                                <button className='book-actions' onClick={()=>handleDelete(book.id)}>Delete</button>
                               
                            </li>)
                        }
                    </ul> )
                }
            </div>
           
       
    )
}

