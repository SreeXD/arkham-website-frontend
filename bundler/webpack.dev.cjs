const path = require('path');
const { merge } = require('webpack-merge');

const config = require('./webpack.common.cjs');

const dir = path.resolve(__dirname, '..')

module.exports = merge(config, {
    mode: 'development', 
    devServer: {
        static: {
            directory: path.resolve(dir, 'public')
        },

        historyApiFallback: true,
        open: true
    }
});