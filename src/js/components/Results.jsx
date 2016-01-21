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
    var num_words = this.state.results.length;
    var reward = num_words < 10 ? "Keep at it." : (num_words < 30 ? "Getting Better." : (num_words < 60 ? "So close..." : "Awesome!!!"));
    return (
      <div className="results">
        <h1>{num_words} Words{reward.substring(reward.length - 1)}</h1>
        <h1>{reward}</h1>
        <Link onClick={this.startDrill} to="/drill" className="btn btn-default btn-lg btn-success">Play Again?</Link>
      </div>
    );
  }

});
