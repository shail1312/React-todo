var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Go with tobo'
        }, {
          id: 2,
          text: 'Write code'
        }, {
          id: 3,
          text: 'Play game'
        }, {
          id: 4,
          text: 'Purchase books'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo : ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
