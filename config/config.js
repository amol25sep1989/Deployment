const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || '192.168.1.61') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
    serverUrl: process.env.serverUrl || 'http://192.168.1.61:3000'

}

export default config
