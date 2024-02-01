import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage/index';
import MainPage from './pages/MainPage/index';
import DetailPage from './pages/DetailPage/index';
import SearchPage from './pages/SearchPage/index';
import Nav from './components/MovieModal/Nav';
import {useRef} from 'react'



const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}


function App() {

  const ref = useRef('안녕하세요');
  console.log(ref);


  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path=":movieId" element={<DetailPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
   </> 
  )
}



export default App
