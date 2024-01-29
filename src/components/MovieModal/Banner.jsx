import { useEffect, useState } from "react";
import axios from "../../api/axios"
import './Banner.css'
import requests from "../../api/request";

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async() => {
    // 현재 사용중인 영화 정보를 가져오기(여러 영화)
    const response = await axios.get(requests.fetchNowPlaying);
    // 여러 영화 중 영화 하나의 ID를 가져오기
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id
    console.log(response)

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: "videos"}
    })
    setMovie(movieDetail);
    console.log(movieDetail);
  }

  return (
    <div>Banner</div>
  )
}

export default Banner