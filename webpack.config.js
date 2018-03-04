path = require('path');

module.exports = {
    context: path.resolve(__dirname, './app/assets/js/'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, './app/temp/js'),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                    }
                  }
            }
        ]
    }
}