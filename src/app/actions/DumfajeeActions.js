var DumafajeeAppDispatcher = require('../dispatcher/DumafajeeAppDispatcher');
var DumafajeeConstants = require('../constants/ChatConstants');

var ActionTypes = DumafajeeConstants.ActionTypes;

module.exports = {

  receiveAll: function(dumafajees) {
    DumafajeeAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_DUMAFAGEES,
      dumafajees: dumafajees
    });
  }
};
