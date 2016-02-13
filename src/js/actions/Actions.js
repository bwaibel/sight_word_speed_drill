var AppDispatcher = require('../dispatchers/AppDispatcher');
var ActionTypes = require('../constants/AppConstants').ActionTypes;

module.exports = {
  guessRight: function() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.GUESS,
      score: 1
    })
  },
  guessWrong: function() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.GUESS,
      score: -1
    })
  },
  startDrill: function(gameName) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.START_DRILL,
      gameName: gameName
    })
  },
  endDrill: function() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.END_DRILL
    })
  }
}
