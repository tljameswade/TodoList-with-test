import FilterLink from '../container/filterlink';
import React from 'react';

const FilterLinks = () => {
    return (
    <div style={{fontSize: '1.5em'}}>
        <FilterLink text={'All'} />
        {' '}
        {'|'}
        {' '}
        <FilterLink text={'Completed'} />
        {' '}
        {'|'}
        {' '}
        <FilterLink text={'InComplete'} />
    </div>
    );
}

export default FilterLinks;
