var React = require('react');

var Greeting = React.createClass({
    render: function() {
        
        if(this.props.name == "Boberto"){
            return ( <h1> Hi there, { this.props.name }! </h1> );
        } else {
            return ( <h1> Hey, you're not {this.props.name}, GOAWAY! </h1>);
        }
    }
});

module.exports = Greeting;
