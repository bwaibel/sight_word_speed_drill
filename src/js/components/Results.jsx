var React = require('react');
var DataStore = require('../stores/DataStore');
var Actions = require('../actions/Actions.js');
var StoreToState = require('./mixins/StoreToState.js');


module.exports = React.createClass({

  mixins: [StoreToState],

  handleChangeName: function(event) {
    ReportActions.updateReportSettings({name: event.target.value});
  },

  runReport: function(event) {
    ReportActions.runReport();
  },

  render: function() {
    return (
      <div className="results">Good Job!</div>
    );
  }

});
