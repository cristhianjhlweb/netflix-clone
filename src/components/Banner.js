import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';

const Banner = () => {

    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        };

        fetchData();
    }, []);

    console.log(movie);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
            <h2 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h2>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <p className="banner__description">
                {truncate(movie?.overview, 150)}
            </p>
            {/* descrip´cion */}
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    );
};

export default Banner;