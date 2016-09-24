var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');
var ASSET_DIR = path.resolve(__dirname, 'assets');

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ '', '.js', '.jsx', '.json' ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            },
            {
                test: /\.(jpe?g|png)$/i,
                include: ASSET_DIR,
                loader: 'file'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'sass'
                ]
            }
        ]
    }
};
