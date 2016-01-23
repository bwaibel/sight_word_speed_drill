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

  startDrill: function(event) {
    Actions.startDrill();
  },

  render: function() {
    return (
      <h1><Link onClick={this.startDrill} to="/drill" className="btn btn-default btn-lg btn-success">Start The Clock!</Link></h1>
    );
  }

});
