var TodoActionsCreators = require('../actions/todo_actions_creators');

var TodoItem = React.createClass({
  getInitialState: function() {
    return {
      completed: this.props.data.completed
    }
  },

  toggleCompleted: function(event) {
    this.setState({
      completed: !this.state.completed
    });
  },

  deleteItem: function(){
    TodoActionsCreators.deleteTodo(this.props.data.id);
  },

  render: function() {
    return (
      <li className='todo-list-item' onClick={ this.toggleCompleted }>
        <p className='position'>{ this.props.position }.</p>
        <p className='task'>{ this.props.data.title }</p>
        <button onClick={ this.deleteItem }>x</button>
      </li>
    )
  }
});

module.exports = TodoItem;
