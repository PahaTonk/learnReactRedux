import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, clickDeleteTask, clickCompleteTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem 
        key={id} 
        text={text} 
        isCompleted={isCompleted} 
        clickDeleteTask={ () => clickDeleteTask(id) }
        clickCompleteTask={ () => clickCompleteTask(id) }/>
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
}

ToDoList.defaultProps = {
  tasksList: [],
}

export default ToDoList;
