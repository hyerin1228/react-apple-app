// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './MovieModal.css'
import { imageBasePath } from '../../constant';
import useOnClickOutside from '../../hooks/useOnClickOutside';

// eslint-disable-next-line no-unused-vars, react/prop-types
const MovieModal = ({  backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalOpen }) => {

  //const backdropUrl = `${imageBasePath}${backdrop_path})`;

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setModalOpen(false);
  })
  // console.log(ref);

  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className='presentation' role="presentation">
      <div className='wrapper-modal'>
        <div className='modal' ref={ref} >
          <span
            onClick={() => setModalOpen(false)}
            className='modal-close'
          >
            X
          </span>
          <div className='modal__poster'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className={`modal__poster-img ${hovered ? 'darken' : ''}`}
              src={`${imageBasePath}${backdrop_path}`}
              alt="modal_poster-img"
            />
            {hovered && (
            <div className='modal__details'>
                <p>
                  <span>
                    100% for you
                  </span>{" "}
                  {release_date ? release_date : first_air_date}
                </p>
                <h2>
                  {title ? title: name}
                </h2>
                <p className='modal__overview'>평점: {vote_average}</p>
                <p className='modal__overview'>{overview}</p>
            </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MovieModal
