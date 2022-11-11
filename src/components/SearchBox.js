import React from 'react';

const SearchBox = (props) => {

    const inputEventHandler = (e) => {
        props.setSearchValue(e.target.value)
    }

    return (
        <div className='col col-sm-4'>
            <input className='form-control' value={props.value} onChange={inputEventHandler} placeholder="Type to search...." />
        </div>
    );
};

export default SearchBox;