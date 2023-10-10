import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const ComedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        className="image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />

      <div className="movie-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={ComedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
