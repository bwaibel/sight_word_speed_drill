var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({

  render: function() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }

});
