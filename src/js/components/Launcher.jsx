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
      <Link onClick={this.startDrill} to="/drill">Start The Clock!</Link>
    );
  }

});
