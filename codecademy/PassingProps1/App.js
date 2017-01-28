var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./Greeting.js');


var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>
                    Hello you...
                </h1>
                <Greeting name="Boberto" />
            </div>
            );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
