var TodoItem = require('./todo_list_item'),
  TodoStore  = require('../stores/todo_store');


function getTodoItems(item, i) {
  return <TodoItem data={ item } position={ i + 1 } />
}

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: TodoStore.getColletion()
    }
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      items: TodoStore.getColletion()
    });
  },

  render: function() {
    var items = this.state.items.map(getTodoItems);

    return (
      <div className='todo-list'>
        <div className='list-content'>
          <h1 className='title'>{ this.props.name }</h1>
          <ul className='list'>
            {items}
          </ul>
        </div>
      </div>
    )
  },
});

module.exports = TodoList;
