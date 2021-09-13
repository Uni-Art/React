import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import VideoPlayer from "./VideoPlayer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Detail(props) {
    let {id} = useParams();
    const [detail, setDetail] = useState(null);
    const [show, setShow] = React.useState(false);
    const ref = React.useRef(null);

    useEffect(function effectFunction() {
            async function fetchDetail() {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
                const json = await response.json();

                const year = (date) => {
                    let d = new Date(date);
                    let y = d.getFullYear();
                    return y;
                }

                const genres = (items) => items !== null ? items.map((item, index, arr) => (
                    <span key={item.id} className="tags__item">{item.name} {arr.length - 1 !== index ? '/ ' : null}</span>
                )) : null;

                setDetail({
                    title: json.title,
                    description: json.overview,
                    img: process.env.REACT_APP_IMG_PATH + json.backdrop_path,
                    adult: json.adult ? '18+' : false,
                    genres: genres(json.genres),
                    releaseYear: year(json.release_date),
                    language: json.original_language,
                    rating: json.vote_average,
                    runtime: json.runtime,
                });
            }

            fetchDetail();
        }

        ,
        [id]
    );

    function onToggle() {
        setShow(!show);
    }

    if (detail === null) {
        return <div>Loading...</div>
    } else {
        return (
            <section>
                <Container>
                    <Row>
                        <Col md={6} className="p-3 d-flex align-items-center justify-content-center d-md-none">
                            <img src={detail.img} alt={detail.title}/>
                        </Col>
                        <Col md={6} className="p-5 p3-xs">
                            <h1 className="">{detail.title}</h1>
                            <p>{detail.description}</p>
                            <hr/>

                            <ul className="list-inline">
                                <li className="list-inline-item">{detail.releaseYear}</li>
                                <li className="list-inline-item">{detail.rating} <FontAwesomeIcon icon="star"/></li>
                                <li className="list-inline-item">{detail.language} <FontAwesomeIcon
                                    icon="globe-americas"/></li>
                                <li className="list-inline-item">{detail.runtime} min</li>
                            </ul>

                            <p>{detail.genres}</p>
                            <Button onClick={onToggle} className="btn-danger">
                                Play video <FontAwesomeIcon icon="play-circle"/>
                            </Button>
                        </Col>
                        <Col md={6} className="p-5 d-none d-md-flex align-items-center">
                            <img src={detail.img} alt={detail.title}/>
                        </Col>
                    </Row>

                    {show && (
                        <VideoPlayer ref={ref} autoPlay
                                     src={'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'}/>
                    )}
                </Container>
            </section>

        )
    }
}

export default Detail