var keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    GUESS: null,
    START_DRILL: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

};
