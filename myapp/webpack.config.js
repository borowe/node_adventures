var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    
    entry: [
        //__dirname + '/app/index.js',
        'webpack-dev-server/client?https://0.0.0.0:8080',
        __dirname + '/app/index.js'
        ],
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    
    output: {
        filename: 'tranformed.js',
        path: __dirname + '/build'
    },
    
    plugins: [HTMLWebpackPluginConfig]
    
};

