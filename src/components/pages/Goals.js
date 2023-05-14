import React, {useState} from 'react';
import data from "../../data.json";
//components
import Header from "../utilities/goals/Header";
import ToDoList from "../utilities/goals/ToDoList";
import ToDoForm from "../utilities/goals/ToDoForm";
import Footer from '../utilities/extras/Footer';
//css
import '../../App.css';
import '../utilities/goals/Goals.css';

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