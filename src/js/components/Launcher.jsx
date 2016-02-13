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
    Actions.startDrill("words");
  },

  render: function() {
    return (
      <div>
        <h1><Link onClick={this.startDrill} to="/drill/words" className="btn btn-default btn-lg btn-success">Sight Words</Link></h1>
        <h1><Link onClick={this.startDrill} to="/drill/addition" className="btn btn-default btn-lg btn-success">Adding</Link></h1>
        <h1><Link onClick={this.startDrill} to="/drill/subtraction" className="btn btn-default btn-lg btn-success">Subtracting</Link></h1>
        <h1><Link onClick={this.startDrill} to="/drill/multiplication" className="btn btn-default btn-lg btn-success">Multiplying</Link></h1>
      </div>
    );
  }

});
