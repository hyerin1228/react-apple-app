// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect, useCallback} from 'react';
import requests from '../../api/request';
import PropTypes from 'prop-types';
import axios from "../../api/axios";


const GenreContext = createContext();

export const useGenres = () => useContext(GenreContext);

export const GenreProvider = ({ children }) => {
    const [genres, setGenres] = useState([]);

    const fetchMovieGenresData = useCallback(async () => {
        try{
            const response = await axios.get(requests.fetchMovieGenres);
            setGenres(response.data.genres || []);
        }catch (error){
            console.error(error);
        }
    }, [requests.fetchMovieGenres]);
      
    useEffect(() => {
        fetchMovieGenresData();
    }, [fetchMovieGenresData])

  return (
    <GenreContext.Provider value={genres}>
        {children}
    </GenreContext.Provider>
  );
};

GenreProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
