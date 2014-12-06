var TodoItem = require('./todo_list_item'),
  TodoStore  = require('../stores/todo_store');


function getTodoItems(item, i) {
  return <TodoItem title={ item.title } key={ item.id } position={ i + 1 } completed={ item.completed } />
}

var TodoList = React.createClass({
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
  },

  render: function() {
    var items = this.props.items.map(getTodoItems);

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
