import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, isCompleted, clickDeleteTask, clickCompleteTask }) => (
  <li className="todo-item">
    <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} onClick={ clickCompleteTask }/>
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i className="fas fa-times" onClick={ clickDeleteTask }/>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
}

export default ToDoItem;
