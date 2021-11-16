const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge')

const config = require('./webpack.config');

var webpackConfig = merge(config, {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'production',
});

module.exports = webpackConfig;