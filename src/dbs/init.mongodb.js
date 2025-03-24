'use strict';
const { countConnect } = require('../helpers/check.connect');
const mongoose = require('mongoose');
const config = require('../configs/config.mongodb');

const connectString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 == 1) {  // Đặt điều kiện bật debug ở đây
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("Connected to MongoDB");
        countConnect();  // Gọi hàm đếm số lượng kết nối hiện tại
      })
      .catch((err) => {
        console.log("Error connecting to MongoDB", err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
