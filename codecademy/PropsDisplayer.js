var React = require('react');
var ReactDOM = require('react-dom');

var PropsDisplayer = React.createClass({
    render: function(){
        var stringProps = JSON.stringify(this.props);
        
        return (
            <div>
                <h1>CHECKOUT MY PROPS</h1>
                <h2> { stringProps } </h2>
                <h3> Here is my name, { this.props.myName }! </h3>
            </div>
                );
    }
});


ReactDOM.render(<PropsDisplayer myProp="Hello" myName="Bobert" />, document.getElementById('app'));

