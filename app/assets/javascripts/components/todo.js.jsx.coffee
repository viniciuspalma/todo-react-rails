TodoItem = React.createClass
  render: ->
    isCompleted = if this.props.completed then 'completed' else 'incompleted'

    `(
      <li className='todo-list-item'>
        <p className='name'>{ this.props.title }</p>
        <p className='completed'>{ isCompleted }</p>
      </li>
    )`

TodoList = React.createClass
  render: ->
    if @props.items
      items = @props.items.map (item, i) ->
        `<TodoItem title={ item.title } key={ item.id }  completed={ item.completed } />`

    `(
      <div className='todo-list'>
        <h1 className='title'>{ this.props.name }</h1>
        <ul className='todo-list'>
          {items}
        </ul>
      </div>
    )`

window.TodoList = TodoList
