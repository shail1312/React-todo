var React = require('react');
var TodoList = require('TodoList');

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
  render : function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
