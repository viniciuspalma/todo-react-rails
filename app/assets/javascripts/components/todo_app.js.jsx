var TodoList     = require('./todo_list'),
    TodoComposer = require('./todo_composer');

TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <TodoList items={ this.props.items } name= { this.props.name } />
        <TodoComposer />
      </div>
    )
  }
});

module.exports = TodoApp
