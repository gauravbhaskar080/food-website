const redis = require("redis");
require("dotenv").config();

// Initialize Redis client
const client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: REDIS_HOST,
        port: REDIS_PORT
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
