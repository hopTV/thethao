const redis = require("redis");

class RedisClient {
  constructor() {
    this.client = redis.createClient({
      host: "localhost", // Địa chỉ host của Redis server
      port: 6379, // Cổng mặc định của Redis
    });

    this.client.on("connect", () => {
      console.log("Kết nối đến máy chủ Redis thành công");
    });

    this.client.on("error", (err) => {
      console.error("Lỗi kết nối đến máy chủ Redis:", err);
    });
  }

  // Phương thức để lưu dữ liệu vào Redis
  set(key, value) {
    this.client.set(key, value);
  }

  // Phương thức để lấy dữ liệu từ Redis
  get(key, callback) {
    this.client.get(key, callback);
  }

  del(key) {
    this.client.del(key);
  }

  expire(key, seconds) {
    this.client.expire(key, seconds);
  }

  flushall() {
    this.client.flushall();
  }
}

module.exports = RedisClient;
