/**
 * @file devServer
 * @author luwenlong
 */

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config')
const host = require('./getHost')

const compiler = webpack({...config, mode: 'development'})

const port = '9046'

const server = new WebpackDevServer(compiler, {
    open: false,
    compress: true,
    historyApiFallback: {
        index: 'tpl/index.html'
    },
    contentBase: "../",
    quiet: false,
    noInfo: false,
    hot: true,
    hotOnly: true,
    inline: true,
    lazy: false,
    progress: false,
    disableHostCheck: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    host: host,
    port: port,
    proxy: {
        '/napi/statis/cuser': {
            target: 'http://localhost:18030',
            changeOrigin: true,
            secure: false
        },
        '/napi/statis/excel': {
            target: 'http://localhost:18030',
            changeOrigin: true,
            secure: false
        },
        '/napi/cuser': {
            target: 'http://test.dingdangbao.com',
            //target: 'http://localhost:18030',
            changeOrigin: true,
            secure: false
        },
        '/napi/innosps': {
            target: 'https://www.inno-life.cc/api',
            //target: 'http://localhost:18030',
            secure: false,
            pathRewrite: {
                '/napi': ''
            }
        },
    }
})

server.listen(port, host, function() {
    console.log('server is running on http://%s:%s', host, port)
})
