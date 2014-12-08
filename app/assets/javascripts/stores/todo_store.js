var TodoAppDispatcher = require('../dispatcher/todo_app_dispatcher'),
  TodoConstants       = require('../constants/todo_constants'),
  EventEmitter        = require('events').EventEmitter,
  TodoApi             = require('../api/todo_api'),
  _                   = require('lodash');

var ActionTypes = TodoConstants.ActionTypes,
  CHANGE_EVENT  = 'change',
  _todos        = {};

function _addTodos(todos) {
  _.each(todos, function(todo) {
    if (!_todos[todo.id]) {
      _todos[todo.id] = todo;
    }
  });
}

function _addTodo(todo) {
  _todos[todo.id] = todo;
}

function _removeTodo(todoId) {
  delete _todos[todoId];
}

var TodoStore = _.assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _todos[id];
  },

  getAll: function() {
    return _todos;
  },

  getColletion: function() {
    var collection = [];

    for (var id in _todos) {
      collection.push(_todos[id]);
    }

    return collection;
  },

});

TodoStore.dispatchToken = TodoAppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.type) {

    case ActionTypes.CREATE_TODO:
      TodoApi.createTodo(action.text);
      break;

    case ActionTypes.DELETE_TODO:
      TodoApi.deleteTodo(action.id);
      break;

    case ActionTypes.FETCH_ALL_TODOS:
      _addTodos(action.todos);
      TodoStore.emitChange();
      break;

    case ActionTypes.RECEIVE_TODO:
      _addTodo(action.todo);
      TodoStore.emitChange();
      break;

    case ActionTypes.DELETED_TODO:
      _removeTodo(action.id);
      TodoStore.emitChange();
      break;

    default:
  }

});

module.exports = TodoStore;
