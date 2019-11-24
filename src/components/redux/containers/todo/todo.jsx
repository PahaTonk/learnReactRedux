import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreater';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    taskText: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value
    });
  }

  _addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;

      addTask( ( new Date() ).getTime(), taskText, false);

      this.setState({
        taskText: ''
      })
    }
  }

  _removeTask = (id) => this.props.removeTask(id);

  _completeTask = (id) => this.props.completeTask(id);

  _changeFilter = (activeFilter) => {
    this.props.changeFilter(activeFilter);
  }

  filterTasks = (tasks, filters) => {
    switch (filters) {
      case 'completed': 
        return tasks.filter( (item) => item.isCompleted );

      case 'active': 
        return tasks.filter( (item) => !item.isCompleted );

      default :
        return tasks;
    }
  };
  
  render() {
    const { taskText } = this.state;
    const { tasks, filters } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={ this._addTask } onChange={ this.handleInputChange } value={ taskText }/>
        {isTasksExist && <ToDoList 
                            tasksList={filteredTasks} 
                            clickDeleteTask={ this._removeTask } 
                            clickCompleteTask={ this._completeTask } />}
        {isTasksExist && <Footer 
                            amount={filteredTasks.length}
                            activeFilter={filters} 
                            onChangeFilter={ this._changeFilter }/>}
      </div>
    );
  }
}

export default connect( (state) => ({
  tasks: state.tasks,
  filters: state.filters
}), { addTask, removeTask, completeTask, changeFilter })(ToDo);
