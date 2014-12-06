var TodoItem = React.createClass({
  getInitialState: function() {
    return {
      completed: this.props.completed
    }
  },

  handleClick: function(event) {
    this.setState({
      completed: !this.state.completed
    });
  },

  render: function() {
    return (
      <li className='todo-list-item' onClick={ this.handleClick }>
        <p className='position'>{ this.props.position }.</p>
        <p className='task'>{ this.props.title }</p>
        <span className='completed'></span>
      </li>
    )
  }
});

module.exports = TodoItem;
