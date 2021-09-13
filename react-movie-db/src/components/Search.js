import React, {useContext, useEffect, useState} from 'react'
import {SearchContext} from "../context/SearchContext";
import {Link} from "react-router-dom";
import SearchBar from './SearchBar';

function Search(props) {
    const searchContext = useContext(SearchContext);
    const [movies, setMovies] = useState(null);

    let query = searchContext.query;

    useEffect(function effectFunction() {
        if (query.length > 1) {
            async function onSubmit() {
                let response = await fetch(`${process.env.REACT_APP_BASE_URL}search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
                let json = await response.json();
                setMovies(json.results);
            }

            onSubmit();
        }
    }, [query]);

    const onSubmited = (event) => {
        event.preventDefault();
    };

    const moviesItems = movies ? movies.map(movie => (
        <div key={movie.id} className="col-6 col-sm-4 col-md-3 mb-5">
            <Link to={`/detail/${movie.id}`}>
                <div className="result-item__link">
                    <img
                        src={movie.backdrop_path !== null ?
                            `http://image.tmdb.org/t/p/w342/${movie.backdrop_path}`
                            : 'https://via.placeholder.com/216x121?text=PlaceHolder'}
                        className="result-item__img"
                        alt={movie.original_title ? movie.original_title : movie.original_name}/>
                    <h5 className="result-item__title">
                        {movie.original_title ? movie.original_title : movie.original_name}
                    </h5>
                </div>
            </Link>
        </div>
    )) : null;

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 p-5 d-flex justify-content-center">
                        <form className="row align-items-center" onSubmit={onSubmited}>
                            <SearchBar placeholder="Titles,Movies,Genres"/>
                        </form>
                    </div>
                </div>
                <div className="row mb-5">
                    {moviesItems}
                </div>
            </div>
        </section>
    );
}

export default Search