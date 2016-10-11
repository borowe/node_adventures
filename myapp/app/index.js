var React = require('react');
var ReactDOM = require('react-dom');
var MyThing = require('./components/App.js');


var AnotherThing = React.createClass({
    render: function() {
        return (
            <div>And another thing...</div>
        );
    }
});

ReactDOM.render(<MyThing />, document.getElementById('thing'));
ReactDOM.render(<AnotherThing />, document.getElementById('thing2'));

