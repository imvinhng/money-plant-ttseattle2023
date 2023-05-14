import React, {useState} from 'react';
import data from "../../data.json";
import '../../App.css';
import '../utilities/Goals.css';
//components
import Header from "../utilities/Header";
import ToDoList from "../utilities/ToDoList";
import ToDoForm from "../utilities/ToDoForm";
import Footer from '../utilities/Footer';

function Goals() {

  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  

  return (
    <div>
      <h1 className='goals'>GOALS</h1>
      <Header />
      <ToDoList toDoList={toDoList}  handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
      <Footer />
    </div>
  );
}

export default Goals;