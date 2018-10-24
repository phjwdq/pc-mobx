const path = require('path')

const env = require('./env.json')

const {APP_ENV} = require('./constants')

if (APP_ENV === 'dev') {
    const host = require('./getHost')

    env[APP_ENV].feRoot = env[APP_ENV].feRoot.replace('localhost', host)
    env[APP_ENV].apiPath = env[APP_ENV].apiPath.replace('localhost', host)
}

module.exports = {
    index: path.resolve(__dirname, './../views/index.html'),
    assetsRoot: path.resolve(__dirname, './../public'),
    assetsPublicPath: env[APP_ENV].feRoot,
    assetsSubDirectory: '',
    sourceMap: APP_ENV !== 'dev',
    extractCss: APP_ENV !== 'dev',
    bundleAnalyzerReport: env[APP_ENV].report,
    title: '叮当保  您身边的智能保险顾问',
    apiPath: env[APP_ENV].apiPath,
    feRoot: env[APP_ENV].feRoot,
    socketPath: env[APP_ENV].socket,
    urlPrefix: '/'
}
