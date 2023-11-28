import './filter.css'
import { setTitleFilter, selectTitleFilter, setClearFilter} from '../../redux/slice/slicer'
import {useDispatch, useSelector} from 'react-redux'

export function Filter () {
    const dispatch = useDispatch()
    const selector = useSelector(selectTitleFilter)
   
    const handleTitleFitlerChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const clearFilter = () =>{
        dispatch(setClearFilter())
    }
    return (
        <div className="app-block filter">
            <h2> Filters </h2>
            <div className='filter input'> 
                <input onChange={handleTitleFitlerChange} value={selector} type='text' placeholder='Find by title'/>
                <button onClick={clearFilter} className='filter-button' type='button'> Reset Filter</button>
            </div>
        </div>
    )
}

