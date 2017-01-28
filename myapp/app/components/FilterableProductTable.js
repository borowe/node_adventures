var React = require('react');
var Searchbar = require('./SearchBar.js');
var ProductTable = require('./ProductTable.js');

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


var FilterableProductTable = React.createClass({
    
    handleChange1: function(e) {
        this.setState({
            filterText: e.target.value,
        });
    },
    
    handleChange2: function(e) {
        this.setState({
            inStockOnly: e.target.checked,
        });
    },
    
    
    getInitialState: function() {
        return {
            filterText: '',
            inStockOnly: false
        }
    },
    
    render: function() {
        return (
            <div>
                <Searchbar filterText={this.state.filterText} inStockOnly= { this.state.inStockOnly } onChange1={this.handleChange1} onChange2={this.handleChange2} />
                <ProductTable filterText= { this.state.filterText } inStockOnly = { this.state.inStockOnly } products={PRODUCTS} />
            </div>
            );
    }
});

module.exports =  { FilterableProductTable };
                    
