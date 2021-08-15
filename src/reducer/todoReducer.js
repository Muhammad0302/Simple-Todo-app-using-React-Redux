import { addTodo,deleteTodo,removeTodo } from "../actions";

const initialData ={
    list: []
}
const todoReducer = (state=initialData,action) =>{
   switch (action.type) {
       case "ADD_TODO":
           const {id,data} = action.payload;
        //    console.log("Hello what's up guy's");
           return{
               ...state,
               list:[
                   ...state.list,
                   {
                       id: id,
                       data: data
                   }
               ]
           }

        case "DELETE_TODO":
         const newList = state.list.filter((elm)=>elm.id!=action.id)
          return{
                ...state,
                list: newList 
            }
   
        case "REMOVE_TODO":
                return{
                    ...state,
                    list: [] 
                }
        
       default: return state;
          
   }
}
export default todoReducer