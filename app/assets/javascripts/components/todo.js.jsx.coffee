TodoItem = React.createClass
  getInitialState: ->
    completed: @props.completed

  handleClick: (event) ->
    @setState
      completed: !@state.completed

  render: ->
    `(
      <li className='todo-list-item' onClick={ this.handleClick }>
        <p className='position'>{ this.props.position }.</p>
        <p className='task'>{ this.props.title }</p>
        <span className='completed'></span>
      </li>
    )`

TodoList = React.createClass
  render: ->
    items = @props.items.map (item, i) ->
      `<TodoItem title={ item.title } key={ item.id } position={ i + 1 } completed={ item.completed } />`

    `(
      <div className='todo-list'>
        <div className='list-content'>
          <h1 className='title'>{ this.props.name }</h1>
          <ul className='list'>
            {items}
          </ul>
        </div>
      </div>
    )`

window.TodoList = TodoList
