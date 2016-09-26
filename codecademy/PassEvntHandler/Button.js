var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.letsTalk}>
        Click me!
      </button>
    );
  }
});

module.exports = Button;