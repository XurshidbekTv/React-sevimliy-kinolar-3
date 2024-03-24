import './App.css';
import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import {v4 as uuidv4} from 'uuid';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[{name:'Shumbola', viwors:1722 , favorute:false, like:false, id:1},
      {name:'Jangari kino', viwors:1221 , favorute:false, like:false, id:2},
      {name:'Shumbola 5', viwors:1242, favorute:true, like:true, id:3}],
      term:'',
      filter:'all',
    }
  }
 onDalete=id=>{
        this.setState(({data})=>({data:data.filter(c=>c.id!==id)})
      // const index=data.findIndex(c=>c.id===id)
      // data.splice(index,1)  //mutble
      
      
     
    )
  }

  addForm=item=>{
    const newItem={name:item.name, viwors:item.viwors, id:uuidv4(), favorute:false, like:false}
    this.setState(({data})=>({
      data:[...data, newItem]})
      )
  }
  onToggleProp=(id, prop)=>{
    
    this.setState(({data})=>({
      data:data.map(item=>{
        if(item.id===id){
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  
  }

  searchHandler=(arr, term)=>{
    if(term.length===0){
      return arr
    }
    return arr.filter(item=>item.name.toLowerCase().indexOf(term)> -1)
  }
  filterHandler=(arr, filter)=>{
    switch(filter){
      case 'popular':
        return arr.filter(c=>c.like)
      case 'mostViewers':
        return arr.filter(c=>c.viwors>800)
       
      default:
       return arr
    }
  }
 updateTermHandler=(term)=>{
  this.setState({term})
 }
 updateFilterHandler=(filter)=>this.setState({filter})
 
  render(){
  const {data, term, filter}=this.state
  const allMoviesCount=data.length
  const favouriteMovieCount=data.filter(c=>c.favorute).length
  const visibleData=this.filterHandler(this.searchHandler(data, term), filter)
  
    return (
      <div className="App">
        <div className='content'>
          <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount}/>
          <div className='search-panel'>
            <SearchPanel updateTermHandler={this.updateTermHandler}/>
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
          </div>
          <MovieList onToggleProp={this.onToggleProp} data={visibleData} onDalete={this.onDalete}/>
          <MoviesAddForm addForm={this.addForm}/>
        </div>
      </div>
    )
  }
 
}

export default App;
