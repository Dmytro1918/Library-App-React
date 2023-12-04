import './filter.css'
import { setTitleFilter, selectTitleFilter, setClearFilter, setNameFilter,setFavFilter, selectNameFilter, selectFav} from '../../redux/slice/slicer'
import {useDispatch, useSelector} from 'react-redux'
import { AiOutlineCheckCircle, AiOutlineCloseCircle  } from "react-icons/ai";

export function Filter () {
    const dispatch = useDispatch()
    const selector = useSelector(selectTitleFilter)
    const authorName = useSelector(selectNameFilter)
    const favBooks = useSelector(selectFav)
   
    const handleTitleFitlerChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const handleNameFilterChange = (e) => {
        dispatch(setNameFilter(e.target.value))
    }

    const clearFilter = () =>{
        dispatch(setClearFilter())
    }

    const chooseFav = () => {
        dispatch(setFavFilter())
    }


    return (
        <div className="app-block filter">
            <h2> Filters </h2>
            <div className='filter-row'>
                <div className='filter input'> 
                    <input onChange={handleTitleFitlerChange} value={selector} type='text' placeholder='Find by title'/>
                </div>
                <div className='filter input'>
                    <input onChange={handleNameFilterChange} value={authorName} className='filter input' type='text' placeholder='Search by name...'/>
                </div>
                <div onClick={chooseFav} className='icon-fav-div'>
                {!favBooks? 
                <AiOutlineCheckCircle className='icon-fav'/>:
                <AiOutlineCloseCircle className='icon-fav'/>
                }
                </div>
                <button onClick={clearFilter} className='filter-button' type='button' > Reset Filter</button>
            </div>
        </div>
    )
}

