var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var ActionTypes = Constants.ActionTypes;
var Actions = require('../actions/Actions');
var assign = require('object-assign');
var _ = require('underscore');

var Router = require('react-router');
var words = require('../constants/Words');

// data storage
var _data = {
  currentRound: undefined,
  currentItem: undefined,
  lastResults: undefined
};

function startDrill(gameName) {
  console.log('startDrill:', gameName, words, _data);
  _data.currentRound = words[gameName].startRound();
  _data.currentItem = _data.currentRound.nextWord(0);
  console.log('startDrill:', _data);
}

function endDrill() {
  _data.lastResults = _data.currentRound.endRound();
}

function nextWord(score) {
  _data.currentItem = _data.currentRound.nextWord(score);
}

// Facebook style store creation.
var DataStore = assign({}, EventEmitter.prototype, {

  // public methods used by Controller-View to operate on data
  getInitialState: function() {
    return _data;
  },

  // Allow Controller-View to register itself with store
  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  // triggers change listener above, firing controller-view callback
  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT, _data);
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.type) {
      case ActionTypes.GUESS:
        nextWord(action.score);
        DataStore.emitChange();
        break;
      case ActionTypes.START_DRILL:
        startDrill(action.gameName);
        DataStore.emitChange();
        break;
      case ActionTypes.END_DRILL:
        endDrill();
        DataStore.emitChange();
        break;
    }
  })

});

module.exports = DataStore;
