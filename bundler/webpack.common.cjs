const path = require('path');

const dir = path.resolve(__dirname, '..')

module.exports = {
    entry: path.resolve(dir, 'src/index.js'),
    output: {
        path: path.resolve(dir, 'public'),
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.mp4$/,
                use: 'file-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            }
        ]
    }
};