module.exports = {
    outputDir: '../public/c-n',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/c-n/'
        : '/',
}