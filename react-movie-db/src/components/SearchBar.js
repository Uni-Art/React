import './SearchBar.css';
import React, {useState, useContext} from "react";
import {SearchContext} from "../context/SearchContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const searchContext = useContext(SearchContext);

    const searchQueryHandler = () => {
        searchContext.searchHandler(searchQuery);
    };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div className="searchBar">
            <div className="input-group">
                <input
                    placeholder={props.placeholder || 'Search'}
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={searchQuery}
                />
                <button className="btn btn-secondary" onClick={searchQueryHandler}>Search <FontAwesomeIcon icon="search"/></button>
            </div>
        </div>
    );
};

export default SearchBar;