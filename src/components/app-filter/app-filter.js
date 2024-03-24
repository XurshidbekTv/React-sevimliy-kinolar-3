import './app-filter.css'

const AppFilter=({updateFilterHandler,filter})=>{


    return(
      <div className="btn-group">
        {btnsArr.map(arr=>(
          <button name={arr.name} className={`btn ${filter ===arr.name ? 'btn-dark': 'btn-outline-dark'}`} type='button' onClick={()=>updateFilterHandler(arr.name)}>{arr.label}</button>
        ))}
      </div>
    ) 
}
const btnsArr=[
  {name:'all', label:'Barcha kionlar'},
  {name:'popular', label:'Mashxur kinolar'},
  {name:'mostViewers', label:"Eng kop ko'rilgan kinolar"}
]
export default AppFilter