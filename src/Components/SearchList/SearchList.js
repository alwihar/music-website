import React from 'react';

const SearchList = ({songs, albums}) => {
    return (
        <div className="SearchList">
            {songs && songs.map((song, index) => {
                return (
                    <div key={index}>
                        {song.title}
                    </div>
                )
            })}
        </div>
    )
};

export default SearchList;
