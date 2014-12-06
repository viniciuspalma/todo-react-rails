var TodoAppDispatcher = require('../dispatcher/todo_app_dispatcher'),
  TodoConstants       = require('../constants/todo_constants'),
  EventEmitter        = require('events').EventEmitter,
  _                   = require('lodash');


var ActionTypes = TodoConstants.ActionTypes,
  CHANGE_EVENT  = 'change',
  _todos        = {};


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

  getCreatedTodoData: function(text) {
    return {
      id: 'new',
      title: text,
      completed: false
    };
  }

});

TodoStore.dispatchToken = TodoAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.CLICK_TODO:
      TodoStore.emitChange();
      break;

    case ActionTypes.CREATE_TODO:
      TodoStore.emitChange();
      break;

    default:
  }

});

module.exports = TodoStore;
