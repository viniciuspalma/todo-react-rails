var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CREATE_TODO: null,
    DELETE_TODO: null,
    FETCH_ALL_TODOS: null,
    RECEIVE_TODO: null,
    DELETED_TODO: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
