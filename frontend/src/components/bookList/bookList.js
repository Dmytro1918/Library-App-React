 import { useSelector } from 'react-redux'
import './bookList.css'
 export function BookList  () {
    const getBook = useSelector((state)=>state.books)
    console.log(getBook)
    return(
        
            <div className="app-block book-list">
                <h2> Book List </h2>
                {getBook.length===0 ? (
                    <p>No books available</p>)
                    : (<ul>
                        {
                        getBook.map((book, i)=>
                            <li key={i}>
                                <div className='book-info'>{++i}. {book.title} by  <strong>{book.author}</strong></div>
                            </li>)
                        }
                    </ul> )
                }
            </div>
           
       
    )
}

