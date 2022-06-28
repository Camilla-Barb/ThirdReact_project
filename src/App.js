import React, {useState} from 'react'
import './App.css'

const Todo = (props) => {
  return(
    <div style={{textDecoration: props.todo.completato ? 'line-through' : ''}} className='todo'>
      {props.todo.name}
      <div>
        <button onClick={() => props.completaTodo(props.index)}>Completato</button>
      </div>
    </div>
  )
}

const Form = (props) => {
  const [value, setValue] = useState();
  const handleSubmit = (e) => {
      e.preventDefault();
      if (value.trim() === ''){
        alert('Scrivi qualcosa')
        return
      }
      props.submit(value)
      setValue('')
   }
  
const onChangeText = (e) => {
  setValue(e.target.value)
}

    return(
      <form onSubmit={handleSubmit}>
        <input className='input' type='text' value={value} placeholder='aggiungi todo' onChange={onChangeText}/>
      </form>
    )
  }

const App = () => {
  const [todos, setTodos] = useState([
      {name:'imparare React', completato:false},
      {name:'imparare gli state', completato:false},
      {name:'imparare i components', completato: false},
    ]);

const addTodo= (todo) => {
  const newTodos = [...todos, {name:todo}]
  setTodos(newTodos)
}

const completaTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].completato = true;
 setTodos(newTodos)
} 

    return(
    <div className='app'>
      <div className='todo-list'>
        {todos.map((item, index) => (
          <Todo key={index} todo={item} index={index} completaTodo={completaTodo}/>
        ))}
        <Form submit={addTodo}/>
      </div>
    </div>
    )
  }




export default App;
