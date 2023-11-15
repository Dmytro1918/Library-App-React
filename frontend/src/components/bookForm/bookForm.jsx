import {useState} from 'react'
import {useDispatch} from 'react-redux'
import './bookForm.css'
import { addBook } from '../../redux/books/actionCreators'
import { uid } from 'uid';
import { bookList } from '../../books.js';


export function  BookForm () {
    const [title, setTitle] = useState('')
    const [author,setAuthor]=useState('')
    const dispatch=useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(title  &&  author){
            const book = {
                title,
                author,
                id:uid(),
                isFavourite: false
            }

            dispatch( addBook(book))
            setAuthor('')
            setTitle('')
        }
    }

    const bookRandomId=bookList.map((book)=>({
        
        ...book,
        id:uid(),
        isFavourite: false
        
    }))
   
    const handleRandomBook = () =>{
        const bookRandom = bookRandomId[Math.floor(Math.random()* bookRandomId.length)]
        dispatch(addBook(bookRandom))
    }

    return (
       
         <div className="app-block book-form"> 
            <h2> Add a new book </h2>
            
            <form  onSubmit = {handleSubmit} className='book-form'>
                <div>
                    <label htmlFor="text">Title:</label>
                    <input type='text' id='title' value={title}  onChange={(e)=>{setTitle(e.target.value)}} ></input>
                    <label htmlFor="author">Author:</label>
                    <input  type ='text' id="author"  value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='book-form input' ></input>
                </div>
                    <button type='submit'>Add Book</button>
                    <button type='button' onClick={handleRandomBook}> Random  book </button>
            </form>
        </div>
    )
}
