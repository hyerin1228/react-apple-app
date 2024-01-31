import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { imageBasePath } from '../../constant';
import axios from "../../api/axios"
// import axios from 'axios';


const DetailPage = () => {

  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData(){
     const response = await axios.get(
      `/movie/${movieId}`
     );
     setMovie(response.data);
    }
    fetchData();
  }, [movieId])
  

  if (!movie) return null;

  return (
    <section>
      <img
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt="detail"
      />
    </section>
  )
}
 
export default DetailPage