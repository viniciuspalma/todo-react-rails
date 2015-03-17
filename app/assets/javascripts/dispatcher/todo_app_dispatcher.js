var TodoConstants = require('../constants/todo_constants');
var Dispatcher = require('flux').Dispatcher;
var _ = require('lodash');

var PayloadSources = TodoConstants.PayloadSources;

var TodoAppDispatcher = _.assign(new Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleApiAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };

    this.dispatch(payload);
  }

});

module.exports = TodoAppDispatcher;
