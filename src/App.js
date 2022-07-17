import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import Task from './components/Task';
import TaskCreator from './components/TaskCreator';
import { fetchTasks } from './redux/actions/todoActions';
 
const App = (props) => {

  React.useEffect(() => {
    props.fetchTasks()
  }, [])

  return (
    <div className="App">
      <TaskCreator/>
      {props.tasks.map(task => <Task key={task.id} task={task}/>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.todo.tasks
  }
}

const mapDispatchToProps = {
  fetchTasks: fetchTasks,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
