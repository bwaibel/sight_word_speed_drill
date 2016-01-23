var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var ActionTypes = Constants.ActionTypes;
var Actions = require('../actions/Actions');
var assign = require('object-assign');
var _ = require('underscore');

var Router = require('react-router');
console.log(Router);

var words = require('../constants/Words');
// TODO: calculate an ema 
var min_reaction_time = 1000;
var target_guess_time = 2000; // millis per guess looking for 100 guesses per minute
// initialize mean scores with row 0 getting a perfect score and everything else more difficult
var word_row_means = words.map(function(value,index) {
  return (Math.pow(2, index) * (target_guess_time - min_reaction_time)) + min_reaction_time;
});

function chooseRow() {
  return 0;
  // rows that are too fast or too slow are penalized 
  var row_scores = word_row_means.map(function(mean) {
    var after_reaction_mean = mean - min_reaction_time;
    if(after_reaction_mean <= 0) {
      // faster than reaction time is heavily penalized
      return 1/500;
    }
    else {
      // inverse log2 distance from the mean plus 
      return 1 / (1 + Math.abs(Math.log2(after_reaction_mean / (target_guess_time - min_reaction_time))));
    }
  });
  var score_sum = row_scores.reduce(function(sum, score) {return sum + score});
  var cumulative_frequency = row_scores.reduce(function(cumsum, score){
    var frequency = (score / score_sum);
    cumsum.push((cumsum[cumsum.length-1]||0)+frequency)
    return cumsum;
  }, []);
  var r = Math.random();
  return cumulative_frequency.reduce(function(result, next, index) {
    return result !== undefined ? result : (r < next ? index : undefined);
  }, undefined);
}


// data storage
var _data = {
  word: words[0][0],
  row_num: 0,
  column_num: 0,
  answers: [],
  drill_started_at: new Date() + 3600000*24*365,
  word_started_at: new Date(),
};

function startDrill() {
  _data.drill_started_at = new Date();
  _data.row_num = chooseRow();
  nextWord(0);
}

function endDrill() {
  _data.results = _data.answers;
  _data.answers = [];
}

function nextWord(score) {
  
  if(score != 0) {
    var stop_time = new Date();
    var current_duration = stop_time - _data.word_started_at;
    if(!isNaN(current_duration) && score > 0) {
      var current_mean = word_row_means[_data.row_num];
      var ema_alpha = 0.25;

      // keep track of the row's ema
      word_row_means[_data.row_num] = ema_alpha * current_mean + (1 - ema_alpha) * current_duration;
    }
    
    _data.answers.push({word:_data.word,score:score,duration: stop_time - _data.word_started_at});
  }
  
  _data.column_num = Math.floor(Math.random() * words[_data.row_num].length)
  _data.word = words[_data.row_num][_data.column_num];
  _data.word_started_at = new Date();
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
        startDrill();
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
