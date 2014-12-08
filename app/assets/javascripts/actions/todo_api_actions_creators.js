var TodoAppDispatcher = require('../dispatcher/todo_app_dispatcher');
var TodoConstants = require('../constants/todo_constants');

var ActionTypes = TodoConstants.ActionTypes;

module.exports = {

  todoFetchAll: function(todos) {
    TodoAppDispatcher.handleApiAction({
      type: ActionTypes.FETCH_ALL_TODOS,
      todos: todos
    });
  },

  receiveCreatedTodo: function(todo) {
    TodoAppDispatcher.handleApiAction({
      type: ActionTypes.RECEIVE_TODO,
      todo: todo
    });
  },

  deletedTodo: function(id){
    TodoAppDispatcher.handleApiAction({
      type: ActionTypes.DELETED_TODO,
      id: id
    });
  }

};
