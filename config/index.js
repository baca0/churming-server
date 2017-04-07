exports.prop = {
    uri: 'mongodb://localhost:27017/foodi',
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
    imgPath: '/Users/baca/images/'
};