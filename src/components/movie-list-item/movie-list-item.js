import './movie-list-item.css'




const MovieListItem = props => {
  const {name, viwors, onDalete,onToggleProp, favorute, like}=props
  return (
  

    <li className={`list-group-item d-flex justify-content-between  ${favorute && "favourite"} ${like && 'like'}`}>
        <span onClick={onToggleProp} className='list-group-item-label' data-toggle='like'>{name}</span>
        <input type="number" className='list-group-item-input abs' defaultValue={viwors}/>
        <div className='d-flex justify-content-center align-items-center gap-3'>
            <button type='button' className='btn-cookie btn-sm abs'>
                <i className='fas fa-cookie' onClick={onToggleProp} data-toggle='favorute'/>
            </button>
            <button type='button' className='btn-trash btn-sm abs'>
                <i className='fas fa-trash' onClick={onDalete} />
            </button>
            <i className='fas fa-star'/>
        </div>
    </li>
  )
}

export default MovieListItem