import React, { useState } from "react";

// query is the state
// SearchHandler is a function for changing the state.
export const SearchContext = React.createContext({
    query: "",
    searchHandler: () => {},
});

// Defining a HOC component
// "query" state and "searchHandler" function can use in any component inside the App component
const SearchContextProvider = (props) => {
    const [query, setQuery] = useState("");

    const searchHandler = (query) => {
        setQuery(query);
    };

    return (
        <SearchContext.Provider
            value={{ query: query, searchHandler: searchHandler }}
        >
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;