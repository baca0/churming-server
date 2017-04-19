exports.prop = {
    uri: 'mongodb://localhost:27017/soiate',
    option: {
        db: {
            safe: true
        },
        server: {
            auto_reconnect: true,
            socketOptions: {
                keepAlive: 1,
                connectTimeoutMS: 30000
            }
        }
    },
    imgPath: '/Users/baca/IdeaProjects/foody/images/'
};