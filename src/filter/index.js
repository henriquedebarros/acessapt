import { useState } from 'react';
import { FilterContext } from '../contexts/FilterContext';
import Home from '../pages/Home';
import Places from '../components/Places';

const Filter = () => {
    const [filteredPlaces, setFilteredPlaces] = useState('');

    return(
        <FilterContext.Provider value={{filteredPlaces, setFilteredPlaces}}>
            <Home />
            <Places />
        </FilterContext.Provider>
    )
}

export default Filter;