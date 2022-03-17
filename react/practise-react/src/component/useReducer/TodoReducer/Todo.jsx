import { ACTIONS } from "./TodoReducer"
const Todo = ({todo, dispatch}) =>{
    return (
        <div className="todo-container">
            <span style={{color : todo.complete ? '#AAA': '#000'}}>{todo.name}</span>
            <div>
                <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>toggle</button>
                <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>delete</button>
            </div>
            
        </div>
    )
}

export default Todo