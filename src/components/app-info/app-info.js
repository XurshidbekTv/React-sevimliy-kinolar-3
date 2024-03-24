import './app-info.css'



const AppInfo = ({allMoviesCount, favouriteMovieCount}) => {
  return (
    <div className='app-info'>
        <p className='fs-3 fw-bold text-uppercase'>barcha kinolar soni: {allMoviesCount}</p>
        <p className='fs-4 fw-bold text-uppercase'>seviliy kinolar: {favouriteMovieCount}</p>
    </div>
  )
}

export default AppInfo