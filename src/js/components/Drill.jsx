var React = require('react');
var DataStore = require('../stores/DataStore');
var Actions = require('../actions/Actions.js');
var StoreToState = require('./mixins/StoreToState.js');


module.exports = React.createClass({

  mixins: [StoreToState],

  handleChangeName: function(event) {
    ReportActions.updateReportSettings({name: event.target.value});
  },

  guessRight: function(event) {
    Actions.guessRight();
  },

  render: function() {
    console.log(this.state)
    return (
      <div onClick={this.guessRight} className="words" style={{"font-size": "100px", "font-family":"sans-serif"}}>{this.state.word}</div>
    );
  }

});
