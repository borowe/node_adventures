var React = require('react');

var ProductTable = React.createClass({
    render: function() {
        
        var rows = [];
        var lastCategory = null;
        
        this.props.products.forEach(function(product) {
            
            if(product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            lastCategory = product.category;
            
            rows.push(<ProductRow product={product} key={product.name} />);
            
        });
        
        
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
});


var ProductCategoryRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td><b>{this.props.category}</b></td>
            </tr>
        );
    }
});


var ProductRow = React.createClass({
    render: function() {
        
        switch(this.props.product.stocked) {
            case 'false': 
                return (
                    <tr>
                        <td color="red">{this.props.product.name}</td>
                        <td color="red">{this.props.product.price}</td>
                    </tr> 
                );
            break;
            
            case 'true':
                return (
                    <tr>
                        <td>{this.props.product.name}</td>
                        <td>{this.props.product.price}</td>
                    </tr>
                );
            break;
        }
    }
});


module.exports = ProductTable;