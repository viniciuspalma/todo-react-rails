var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CLICK_TODO: null,
    CREATE_TODO: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
