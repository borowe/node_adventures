var React = require('react');

var ProductTable = React.createClass({
    render: function() {
        
        var rows = [];
        var lastCategory = null;
        var filterChars = this.props.filterText;
        var stocker = this.props.inStockOnly;
        
        this.props.products.forEach(function(product) {
            
            
            if(product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            

            if(product.name.indexOf(filterChars) !== -1){
                if(stocker == false){
                    rows.push(<ProductRow dingle={filterChars} product={product} key={product.name} />);
                } else {
                    if(product.stocked == true){
                        rows.push(<ProductRow product={product} key={product.name} />);
                    } else {
                        return;
                    }
                }
            } else {
                return;
            }
            
            lastCategory = product.category;
            
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
    
        var styles;

        if(this.props.product.stocked == false){
            styles = { color: 'red' };
        } else {
            styles = { color: '' };
        }

        return (
            <tr>
                <td style={styles}>{this.props.product.name}</td>
                <td style={styles}>{this.props.product.price}</td>
            </tr> 
            );
    }
});


module.exports = ProductTable;