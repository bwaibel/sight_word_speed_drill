var React = require('react');
var DataStore = require('../stores/DataStore');
var Actions = require('../actions/Actions.js');
var StoreToState = require('./mixins/StoreToState.js');

var Link = require('react-router').Link;

module.exports = React.createClass({

  mixins: [StoreToState],

  handleChangeName: function(event) {
    ReportActions.updateReportSettings({name: event.target.value});
  },

  runReport: function(event) {
    ReportActions.runReport();
  },

  render: function() {
    var result = this.state.lastResults;
    var reward = result.score < .3 ? "Keep at it." : (result.score < .6 ? "Getting Better." : (result.score < .9 ? "So close..." : "Awesome!!!"));
    reward = "Sweet!"
    return (
      <div className="results">
        <h2>{result.achievedResults} Answers{reward.substring(reward.length - 1)}</h2>
        <h2>{reward}</h2>
        <h2><Link onClick={this.startDrill} to="/" className="btn btn-default btn-success">Play Again?</Link></h2>
      </div>
    );
  }

});
