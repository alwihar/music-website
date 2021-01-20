import React from 'react';

const SearchSwitcher = ({checked, handleCheck}) => {
    return (
        <div className="SearchSwitcher">
            <form className="tabber">
                <label htmlFor="t1">Songs</label>
                <input id="t1"
                       type="radio"
                       checked={checked==="songs"}
                       onChange={() => handleCheck("songs")}
                />
                <label htmlFor="t2">Albums</label>
                <input
                    id="t2"
                    type="radio"
                    checked={checked==="albums"}
                    onChange={() => handleCheck("albums")}
                />
                <div className="blob"/>
            </form>
        </div>
    )
};

export default SearchSwitcher;
