var React = require('react');
var DataStore = require('../../stores/DataStore');



module.exports = {

  getInitialState: function() {
    return DataStore.getInitialState();
  },

  componentDidMount: function() {
    DataStore.addChangeListener(this.stateChanged);
  },

  componentWillUnmount: function() {
    DataStore.removeChangeListener(this.stateChanged);
  },

  stateChanged: function(state) {
    this.setState(state);
  }
}
