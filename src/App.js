import './App.css';
import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import Form from './components/Form/Form';
import colorPickerOptions from './colorPickerOptions.json';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <>
        <div className="App">
          <Counter initialValue={0} />

          <Dropdown />

          <ColorPicker options={colorPickerOptions} />

          <div>
            <div className="TodoList">
              <p>Общее кол-во: {totalTodoCount}</p>
              <p>Кол-во выполненных: {completedTodoCount}</p>
            </div>
            <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
          </div>
        </div>
        <Form />
      </>
    );
  }
}

export default App;
