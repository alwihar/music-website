import React, {useState} from 'react';
import axios from 'axios';
import './Search.scss';
import SearchSwitcher from "../SearchSwitcher/SearchSwitcher";
import SearchForm from "../SearchForm/SearchForm";
import SearchList from "../SearchList/SearchList";

const Search = () => {

    const [value, setValue] = useState('');
    const [checked, setChecked] = useState("");
    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        checked==="songs" && getSongs(value.trim());
        checked==="albums" && getAlbums(value.trim());
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleCheck = (value) => {
        setChecked(value);
    };

    const getSongs = (queryString) => {
        const songs = [];
        axios.get(`https://itunes.apple.com/us/rss/topsongs/limit=100/json`)
            .then(function (response) {
                response?.data?.feed?.entry.map((item, ind) => {
                    const songsData = {
                        id: item?.id.attributes["im:id"],
                        title: item?.title.label
                    };
                    songs.push(songsData);
                });
            })
            .catch(function (error) {
                console.log(error.message);
            });
        setSongsData(songs);
        console.log(songsData)
    };

    const getAlbums = (queryString) => {
        const albums = [];
        axios.get(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
            .then(function (response) {
                response?.data?.feed?.entry.map((item, ind) => {
                    const albumsData = {
                        id: item?.id.attributes["im:id"],
                        album: item && item["im:collection"]["im:name"].label
                    };
                    albums.push(albumsData);
                });
            })
            .catch(function (error) {
                console.log(error.message);
            });
        setAlbumsData(albums);
        console.log(albumsData)
    };


    return (
        <div className="Search__wrap">
            <SearchSwitcher
                checked={checked}
                handleCheck={handleCheck}
            />
            <SearchForm
                value={value}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <SearchList
                songs={songsData}
                albums={albumsData}
            />
        </div>
    )
};

export default Search;
