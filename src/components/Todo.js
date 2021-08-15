import React,{useState} from 'react'
import {addTodo,deleteTodo,removeTodo} from '../actions/index'
import {useDispatch,useSelector} from 'react-redux'
import './app.css'
function Todo() {
    const [inputData, setinputData] = useState('');
     const dispatch = useDispatch()
     const list = useSelector((state)=> state.todoReducer.list)
    return (
        <div className="main-div">
         <div className="child-div">
             <figure>
                 <figcaption>Add your list here</figcaption>
             </figure>
             <div className="addItems">
                 <input type="text" value={inputData} onChange={(event)=>setinputData(event.target.value)}  placeholder="add item..." />
                 <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData),setinputData(''))}></i>
             </div>
        
           <div className="showItems">
            {
                 list.map((elm)=>{
                     return(
                    <div className="eachItem" key={elm.id}>
                    <h3>{elm.data}</h3>
                    <i className="far fa-trash-alt add-btn" title="Delete item" onClick={()=>dispatch(deleteTodo(elm.id))}></i> 
                   </div> 
                     )   
                })
            }
            
            </div> 

            <div showItems>
                <button onClick={()=>dispatch(removeTodo())} className="btn effect04" data-sm-link-text="remove all"><span>Check List</span></button>
            </div>

        </div>
        </div>
    )
}
export default Todo
