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

  componentWillMount: function() {
    Actions.startDrill(this.props.params.gameName);
    setTimeout(this.endDrill, 10000);
  },

  render: function() {
    return (
      <h1 onClick={this.guessRight}><div className="fill">{this.state.currentItem.word}</div></h1>
    );
  }

});
