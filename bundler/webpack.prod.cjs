const { merge } = require('webpack-merge');

const config = require('./webpack.common.cjs');

module.exports = merge(config, {
    mode: 'production'
});