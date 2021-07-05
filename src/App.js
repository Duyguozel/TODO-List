import './App.css';
import Table from './table';
import Heading from './Heading';
import * as data from './data.json';
import { BsList, BsPlusCircleFill } from "react-icons/bs";
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id : new Date().getTime(),
      text : todo,
      completed : false,
    }

    setTodos([...todos].concat(newTodo))
    setTodo("")
     
  }
  
  return (
    <div className="box">
      <Heading title="TODO" />
      <hr />
      <Table data={data.taskList} />
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" id="txtAd" placeholder="Görev Yazınız"></input>
        <button style={{ color: 'blue' }}> <BsPlusCircleFill /></button>
      </form>
      {todos.map((todo) => data.taskList.push(todo.text))}
    </div>
  );
}

export default App;
