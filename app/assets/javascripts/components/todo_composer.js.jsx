var TodoActionsCreators = require('../actions/todo_actions_creators');

var TodoComposer = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },

  _createTodo: function() {
    var text = this.state.text.trim();

    if (text) {
      TodoActionsCreators.createTodo(text);
    }

    this.setState({text: ''});
  },

  _onKeyDown: function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this._createTodo();
    }
  },

  _onChange: function() {
    this.setState({text: event.target.value});
  },

  render: function() {
    return (
      <div className='todo-composer'>
        <input className='input-text' type='text' placeholder='Title of task'
          onKeyDown={ this._onKeyDown } onChange={ this._onChange } value={ this.state.text } />
        <button className='button-add-task' onClick={ this._createTodo }>Add task</button>
      </div>
    )
  }
});

module.exports = TodoComposer;
