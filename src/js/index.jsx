var React = require('react');
var ReactRouter = require('react-router'); // or var Router = ReactRouter; in browsers
var RouteHandler = ReactRouter.RouteHandler;
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/App.jsx');
var Launcher = require('./components/Launcher.jsx');
var Drill = require('./components/Drill.jsx');
var Results = require('./components/Results.jsx');

var routes = (
  <Router history={ReactRouter.browserHistory}>
    <Route name="app" path="/" component={App}>
      <IndexRoute component={Launcher} />
      <Route name="launcher" path="launcher" component={Launcher}/>
      <Route name="drill" path="drill/:gameName" component={Drill}/>
      <Route name="results" path="results" component={Results}/>
    </Route>
  </Router>
);

React.render(routes, document.body);
