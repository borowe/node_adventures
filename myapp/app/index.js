var React = require('react');
var ReactDOM = require('react-dom');
var MyThing = require('./components/App.js');
var FilterableProductTable = require('./components/FilterableProductTable.js');
var SearchBar = require('./components/SearchBar.js')

var AnotherThing = React.createClass({
    render: function() {
        return (
                <FilterableProductTable.FilterableProductTable />
            );
    }
});

ReactDOM.render(<AnotherThing />, document.getElementById('go-go-gadget-react'));

