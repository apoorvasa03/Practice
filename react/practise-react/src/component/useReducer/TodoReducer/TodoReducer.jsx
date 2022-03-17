import { useReducer, useState } from "react"
import './todo.css'
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete  }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)  
        default:
            return todos
    }
}

const newTodo = (action) => {
    return {id: Date.now(), name: action.payload.name, complete: false}
}


const TodoReducer = () => {
    let [name, setName] = useState('')
    let [todos, dispatch] = useReducer(reducer, [])

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
        setName('')
    }

    return (
        <div className="container">
           <form onSubmit={handleSumbit} className="form-container">
               <input className="todo-input" type='text' value={name} onChange={(e) => setName(e.target.value)}/>
           </form>
           <div>
            {todos.map((todo) => (
                <Todo key ={todo.id} todo={todo} dispatch= {dispatch}/>
            ))}
           </div>
           
        </div>
    )
}

export default TodoReducer

