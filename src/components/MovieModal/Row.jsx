/* eslint-disable react/prop-types */
import axios from "../../api/axios"
import './Row.css'
import { useCallback, useEffect, useState } from "react"
import MovieModal from './MovieModal';


const Row = ({ title, id, fetchUrl }) => {

  const [movies, setMovies] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false)

  const [movieSelected, setmovieSelected] = useState({});

  const handleClick = (movie) => {
    setmodalOpen(true);
  }

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl])
  
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])
  
  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow"
            onClick={
              ()=>{
                document.getElementById(id).scrollLeft -= window.innerWidth -80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              onClick={ () => handleClick(movie)}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow"
            onClick={
              ()=>{
                document.getElementById(id).scrollLeft += window.innerWidth -80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>

      {modalOpen ?
        <MovieModal {...movieSelected} setmodalOpen={setmodalOpen} />
        : null
      }

    </div>
  )
}

export default Row