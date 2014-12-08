var TodoAppDispatcher = require('../dispatcher/todo_app_dispatcher');
var TodoConstants = require('../constants/todo_constants');

var ActionTypes = TodoConstants.ActionTypes;

module.exports = {

  createTodo: function(text) {
    TodoAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_TODO,
      text: text
    });
  },

  deleteTodo: function(id) {
    TodoAppDispatcher.handleViewAction({
      type: ActionTypes.DELETE_TODO,
      id: id
    });
  }

};
