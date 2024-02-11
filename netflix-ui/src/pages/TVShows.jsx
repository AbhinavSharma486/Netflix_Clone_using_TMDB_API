import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from './../components/NotAvailable';
import { useNavigate } from 'react-router-dom';


export default function TVShows() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

    // const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: "tv" }));
    }, [genresLoaded]);


    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
                <SelectGenre genres={genres} type="tv" />
                {
                    movies.length ? <Slider movies={movies} /> : <NotAvailable />
                }
            </div>
        </Container>
    );
}


const Container = styled.div`
.data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;