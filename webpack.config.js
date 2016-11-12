var ENV = 'development'; //'development' //'production'
var debug = ENV !== 'production';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src/scripts'),
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        demo: ['babel-polyfill', './index.js']
    },
    output: {
        path: path.join(__dirname, 'bundles'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            // Transform JavaScript files via Babel
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    "presets": ["es2015", "react"]
                }
            },
            // Uncomment this if you want to use your own version of React instead of the version 
            // bundled with ReactJS.NET.
            { test: require.resolve('react'), loader: 'expose?React' }
        ],
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['', '.js', '.jsx']
    },
    plugins: debug ? [] : [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};