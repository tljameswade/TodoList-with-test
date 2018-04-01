import React, { Component } from 'react';
import './App.css';
import FilterLinks from './components/presentational/filterlinks';
import FilteredTodos from './components/container/filteredtodos';
import AddTodo from './components/container/addtodo';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>This is a todo list App for practice</h1>
        <FilterLinks />
        <FilteredTodos />
        <AddTodo />
      </div>
    );
  }
}

export default App;
