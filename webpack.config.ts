import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
    entry: {
        background: './src/background.ts',
        content: './src/content.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'rules.json', to: 'rules.json' },
                { from: 'manifest.json', to: 'manifest.json' },
                { from: 'src/icons', to: 'icons' }
            ],
        }),
    ],
    mode: 'development',
    devtool: 'source-map',
};
