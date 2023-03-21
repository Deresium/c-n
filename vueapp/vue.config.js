module.exports = {
    /*devServer: {
        host: 'achouffalize.portailcaptif.c-n.be'
    },*/
    outputDir: '../public/c-n',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/c-n/'
        : '/',
}