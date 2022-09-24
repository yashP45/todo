import './App.css';
import { useState, useEffect } from 'react';
import Item from './Components/item';
import axios from 'axios';
function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([])
  const [isUpdating, setUpdate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/get-todo")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err))
  })

  const addUpdate = () => {
    if (isUpdating === "") {
      axios.post("http://localhost:5000/create-todo", { text })
        .then((res) => {
          console.log(res.data);
          setText("")
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo app</h1>
        <div className='top'>
          <input type="text" placeholder="Enter todo items" value={text} onChange={(e) => setText(e.target.value)} />
          <button className='add' onClick={addUpdate}>Add</button>
        </div>
        <div className='items'>
          {todo.map(item => <Item key={item._id} text={item.text} />)}

        </div>
      </div>

    </div>
  );
}

export default App;
