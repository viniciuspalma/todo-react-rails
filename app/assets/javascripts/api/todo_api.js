var TodoApiActionsCreators = require('../actions/todo_api_actions_creators'),
  AppUtils                 = require('../utils/app_utils');
  API_NAMESPACE            = '/api/v1/todos',

require('es6-promise').polyfill();
require('whatwg-fetch');

module.exports = {
  getAllTodos: function() {
    fetch(API_NAMESPACE)
      .then(AppUtils.status)
      .then(AppUtils.json)
      .then(function(json) {
        TodoApiActionsCreators.todoFetchAll(json);
      }).catch(function(error) {
        console.log('request failed', error);
      });
  },

  createTodo: function(text) {
    fetch(API_NAMESPACE, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: text
      })
    })
    .then(AppUtils.status)
    .then(AppUtils.json)
    .then(function(json) {
      TodoApiActionsCreators.receiveCreatedTodo(json);
    }).catch(function(error) {
      console.log('request failed', error);
    });
  },

  deleteTodo: function(todoId) {
    fetch(API_NAMESPACE + '/' + todoId, {
      method: 'delete'
    })
    .then(AppUtils.status)
    .then(function(json) {
      TodoApiActionsCreators.deletedTodo(todoId);
    }).catch(function(error) {
      console.log('request failed', error);
    });
  }
};
