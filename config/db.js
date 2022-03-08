const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const cennectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("mongoDB connected");
  } catch (err) {
    console.error(err.message);
    // Exit process
    process.exit(1);
  }
};

module.exports = cennectDB;
