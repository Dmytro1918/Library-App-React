import './filter.css'
import { setTitleFilter, selectTitleFilter, setClearFilter, setNameFilter, selectNameFilter} from '../../redux/slice/slicer'
import {useDispatch, useSelector} from 'react-redux'

export function Filter () {
    const dispatch = useDispatch()
    const selector = useSelector(selectTitleFilter)
    const authorName = useSelector(selectNameFilter)
   
    const handleTitleFitlerChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const handleNameFilterChange = (e) => {
        dispatch(setNameFilter(e.target.value))
    }

    const clearFilter = () =>{
        dispatch(setClearFilter())
    }
    return (
        <div className="app-block filter">
            <h2> Filters </h2>
            <div className='filter-row'>
                <div className='filter input'> 
                    <input onChange={handleTitleFitlerChange} value={selector} type='text' placeholder='Find by title'/>
                </div>
                <div className='filter input'>
                    <input onChange={handleNameFilterChange} className='filter input' type='text' placeholder='Search by name...'/>
                </div>
                <button onClick={clearFilter} className='filter-button' type='button' value={authorName}> Reset Filter</button>
            </div>
        </div>
    )
}

