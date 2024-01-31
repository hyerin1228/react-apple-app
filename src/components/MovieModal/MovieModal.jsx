// eslint-disable-next-line no-unused-vars
import React from 'react'
import './MovieModal.css'
import { imageBasePath } from '../../constant';


// eslint-disable-next-line no-unused-vars, react/prop-types
const MovieModal = ({ backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalOpen }) => {
  return (
    <div className='presentation' role="presentation">
      <div className='wrapper-modal'>
        <div className='modal'>
          <span
            onClick={() => setModalOpen(false)}
            className='modal-close'
          >
            X
          </span>
          <img
            className='modal__poster-img'
            src={`${imageBasePath}${backdrop_path}`}
            alt="modal_poster-img"
          />

          <div className='modal__content'>
            <p className='modal_-details'>
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
          
        </div>
      </div>
    </div>
  )
}

export default MovieModal