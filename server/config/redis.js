const redis = require("redis");


// Initialize Redis client
const client = redis.createClient({
    password: 'f0WXVbYD0nytAvtAnIBgypOVVClqdAo0',
    socket: {
        host: 'redis-10533.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10533
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
