import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({data,onDalete,onToggleProp}) => {
  return (
    <div className='movie-list'>
      {data.map((item)=>(
        <MovieListItem
         key={item.id}
         name={item.name} 
         viwors={item.viwors} 
         favorute={item.favorute} 
         like={item.like}
         onDalete={()=>onDalete(item.id)}
         onToggleProp={e=>onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
       
         />
      ))}
       
        
    </div>
  )
}

export default MovieList