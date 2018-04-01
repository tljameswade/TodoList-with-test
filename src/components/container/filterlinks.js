import React from 'react';
import FilterLink from './filterlink';

export const FilterLinks = () => {
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
