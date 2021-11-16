const path = require('path');
const webpack = require('webpack');

var webpackConfig = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/background.ts',

    output: {
        path: path.join(__dirname, 'public'),
        filename: "background.js"
    },

    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader',
            },
        ],
    },
    // import 文で .ts ファイルを解決するため
    // これを定義しないと import 文で拡張子を書く必要が生まれる。
    // フロントエンドの開発では拡張子を省略することが多いので、
    // 記載したほうがトラブルに巻き込まれにくい。
    resolve: {
        // 拡張子を配列で指定
        extensions: [
            '.ts', '.js',
        ],
    },
};

module.exports = webpackConfig;