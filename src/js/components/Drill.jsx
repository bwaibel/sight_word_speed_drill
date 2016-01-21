var React = require('react');
var DataStore = require('../stores/DataStore');
var Actions = require('../actions/Actions.js');
var StoreToState = require('./mixins/StoreToState.js');

var history = require('react-router').browserHistory;

module.exports = React.createClass({

  mixins: [StoreToState],

  handleChangeName: function(event) {
    ReportActions.updateReportSettings({name: event.target.value});
  },

  guessRight: function(event) {
    Actions.guessRight();
  },
  
  endDrill: function() {
    Actions.endDrill();
    history.replace('/results');
  },
  
  componentDidMount: function() {
    setTimeout(this.endDrill, 6000);
  },

  render: function() {
    console.log(this.state)
    return (
      <h1><div onClick={this.guessRight} className="words">{this.state.word}</div></h1>
    );
  }

});
