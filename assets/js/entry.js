var React = require('react');
var Hello = require('./Hello');
React.render(<Hello name="Awesome"/>, document.getElementById("content2"));

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }}
);

React.render(<HelloMessage name="Leewin" />,  document.getElementById("content1"));
