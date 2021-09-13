import './MainCarousel.css';
import React, {useState, useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";

const MainCarousel = ({categoryUrl}) => {
    const [movies, setMovies] = useState(null);

    useEffect(function effectFunction() {
        async function fetchMovies() {
            let response = await fetch(`${process.env.REACT_APP_BASE_URL}${categoryUrl}?api_key=${process.env.REACT_APP_API_KEY}`);
            let json = await response.json();
            setMovies(json.results);
        }

        fetchMovies();
    }, [categoryUrl]);

    const moviesItems = movies !== null ? movies.map(movie => (
                <Link to={`/detail/${movie.id}`} className="main-carousel__item-link" key={movie.id}>
                    <div className="main-carousel__item">
                        <img
                            src={movie.backdrop_path !== null ? `http://image.tmdb.org/t/p/w342/${movie.backdrop_path}` : ''}
                            className="main-carousel__item-img"
                            alt={movie.original_title ? movie.original_title : movie.original_name}/>
                        <h4 className="main-carousel__item-title">
                            {movie.original_title ? movie.original_title : movie.original_name}
                        </h4>
                    </div>
                </Link>
            )) :
        null;

    if (movies === null) {
        return (<div className="main-carousel__loading">Loading...</div>)
    } else {
        return (
            <Carousel
                additionalTransfrom={0}
                arrows="main-carousel__arrow"
                autoPlaySpeed={3000}
                centerMode={false}
                className="main-carousel"
                containerClass="main-carousel__container"
                dotListClass="main-carousel__dot-list"
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass="main-carousel__item"
                keyBoardControl
                minimumTouchDrag={80}
                renderDotsOutside={true}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 6,
                        slidesToSlide: 5,
                        paritialVisibilityGutter: 10
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        slidesToSlide: 1,
                        paritialVisibilityGutter: 20
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 3,
                        slidesToSlide: 3,
                        paritialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""

                swipeable
            >
                {moviesItems}
            </Carousel>
        )
    }
}

export default MainCarousel