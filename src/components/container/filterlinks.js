import React from 'react';
import Link from '../presentational/link';

export const FilterLinks = () => {
    return (
    <div style={{fontSize: '1.5em'}}>
        <Link text={'All'} />
        {' '}
        {'|'}
        {' '}
        <Link text={'Completed'} />
        {' '}
        {'|'}
        {' '}
        <Link text={'InComplete'} />
    </div>
    );
}
