import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <div className="todo-div">
                <button style={{margin: '20px'}} className="todo-btn" onClick={handleFilter}>CLEAR COMPLETED</button>
            </div>
        </div>
    );
};

export default ToDoList;