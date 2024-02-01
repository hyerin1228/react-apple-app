import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from "styled-components";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase';


const Nav = () => {
    
    const [show, setShow] = useState("false");

    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const {pathname} = useLocation();

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const listener = () => {
        if(window.scrollY > 50){
            setShow("true");
        }else{
            setShow("false");
        }
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(!user) {
          navigate('/');
        }else if(user && pathname === "/") {
          navigate('/main');
        }
      }) // 리스너 등록

    }, [auth, navigate, pathname])
    


    useEffect(() => {
        window.addEventListener('scroll', listener);
      return () => {
        window.removeEventListener('scroll', listener);
      }
    }, [])

    const handleChange = (e) => {
      console.log(e.target.value)
      setSearchValue(e.target.value)
      navigate(`/search?q=${e.target.value}`);
    }
  
    const handleAuth = () => {
      signInWithPopup(auth, provider)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {

      })
      .catch((error) => {
        alert(error.message);
      })
    }

  return (
    <NavWrapper show={show}>
      <Logo>
          <img
            alt="logo"
            src="/images/apple-logo.png"
            onClick={() => (window.location.href = "/")}
          />
      </Logo>

      {pathname === "/" ? (
        <Login
          onClick={handleAuth}
        >로그인</Login>
      ) :
        ( <Input
            type="text"
            className="nav__input"
            value={searchValue}
            onChange={handleChange}
            placeholder="영화를 검색해주세요."
          />
        )
      }
    </NavWrapper>
  )
}


const Input = styled.input`
  position: fixed;
  background-color: gba (0,0,0,0.5);
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
  color: black;
  padding: 5px;
  border: 1px solid lightgray;
`;


const Login = styled.a`
  background-color: rgba (0,0,0,0.6); 
  padding: 8px 16px;
  text-transform: uppercase; 
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9; 
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &: hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
`;


const Logo = styled.a`
    padding: 0; 
    width: 70px; 
    font-size: 0;
    display: inline-block; 
    margin-bottom: 10px;
    
    img {
        display: block; 
        width: 100%;
    }
`;

const NavWrapper = styled.nav`
    position: fixed;
    top: 0; 
    left: 0; 
    right: 0;
    height: 70px;
    background-color: ${props => props.show === "true" ? "#000000" : "#000000"};
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px; 
    z-index: 3;
`;

export default Nav