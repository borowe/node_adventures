var React = require('react');

var SearchBar = React.createClass({
    render: function() {
        return (
            <div>
                <input type="text" defaultValue="Search..."/>
                <br/>
                <label><input type="checkbox" />Only show products in stock</label>
            </div>
         );
    }
});

module.exports = SearchBar;
