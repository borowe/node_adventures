var React = require('react');

var SearchBar = React.createClass({
    render: function() {
        return (
            <div>
                <input type="text" ref="text-input" defaultValue={this.props.filterText} onChange={this.props.onChange1} />
                <div>{this.props.filterText}</div>
                <br/>
                <label><input type="checkbox" ref="check-box-input" onChange={this.props.onChange2} />Only show products in stock</label>
                <div>{this.props.inStockOnly}</div>
            </div>
         );
    }
});

module.exports = SearchBar;
