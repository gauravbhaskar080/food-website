const redis = require("redis");
require("dotenv").config();

// Initialize Redis client
const client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

(async () => {
  await client.connect();
})();

client.on("connect", () => {
  console.log("Redis Connected");
});

client.on("error", (err) => {
  console.error("Redis connection error:", err);
});

module.exports = client;
