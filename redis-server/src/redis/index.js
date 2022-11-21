const redis = require("redis");

let redisClient;

(async() => {
    redisClient = redis.createClient({
        socket: {
            port: process.env.REDIS_PORT,
            host: process.env.REDIS_HOST,
            connectTimeout: 5000,
            tls: false
        }
    });

    redisClient.on("error", (error) => console.error(error));
    redisClient.on("connect", () => console.log(`Listening Redis on ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`));

    await redisClient.connect();
})();

module.exports = redisClient;
