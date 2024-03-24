import './movies-add-form.css'
import { Component } from 'react'





 class MoviesAddForm extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      viwes:''
    }
  }
  changeHandlerInput=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  addFormHandler=e=>{
    e.preventDefault()
    this.props.addForm({name:this.state.name, viwors:this.state.viwes})
    this.setState({
      name:'',
      viwes:'',
    })
  }
  render(){
    const {name, viwes}=this.state
    
    return (
      <div className='movie-add-form'>
        <h3>Yangi kion qo'shish</h3>
        <form className='add-form d-flex gap-3' onSubmit={this.addFormHandler}>
        <input type="text" className='form-control new-post-label' placeholder='Qanday kino?' onChange={this.changeHandlerInput} name='name' value={name}/>
        <input type="number" className='form-control new-post-label' placeholder='Necha marotaba korilgan?' onChange={this.changeHandlerInput} name='viwes' value={viwes}/>
        <button type='submit' className='btn btn-outline-dark'>
          Qo'shish
        </button>
        </form>
      </div>
    )
  }
  
}

export default MoviesAddForm