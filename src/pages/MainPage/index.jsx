import { styled } from "styled-components"
import requests from "../../api/request"
// import Nav from '../../components/MovieModal/Nav'
import Banner from "../../components/MovieModal/Banner"
import Row from "../../components/MovieModal/Row"
import { GenreProvider } from "../../components/MovieModal/GenreContext"

// fetchMovieGenres: "/genre/movie/list",
const MainPage = () => {
  return (
    <Container>
      {/* <Nav /> */}
      <Banner />
      <GenreProvider>
        <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
      </GenreProvider>
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`;

export default MainPage