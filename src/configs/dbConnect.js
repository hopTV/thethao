const { default: mongoose } = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/thethao";

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      await mongoose.connect(uri);
      console.log("Kết nối đến cơ sở dữ liệu MongoDB thành công");
    } catch (err) {
      console.error("Lỗi kết nối đến cơ sở dữ liệu MongoDB:", err);
    }
  }
}

module.exports = new Database();
