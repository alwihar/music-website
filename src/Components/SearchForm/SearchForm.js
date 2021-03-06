import React from 'react';

const SearchForm = ({value, handleChange, handleSubmit}) => {
    return (
        <form className="SearchForm" onSubmit={handleSubmit}>
            <input className="Search__input"
                   name='text'
                   placeholder='Enter the name of the song or an album'
                   onChange={handleChange}
                   value={value}
            />
            <button className="Search__button" onClick={handleSubmit}>Search</button>
        </form>
    )
};

export default SearchForm;
