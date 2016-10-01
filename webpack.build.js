var config = require('./webpack.config.js')

config.entry = {
    'vue-bootstrap': './src/index.js'
}

config.output = {
    filename: './dist/[name].js',
    library: 'VueBootstrap',
    libraryTarget: 'umd'
}


module.exports = config
