
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const user = mongoose.Schema(
      {
        username: String,
        password: String, 
        firstName : String, 
        lastName : String
      }
    );


const contact =  mongoose.Schema(
        {
        userID: String,
        address: String,
        name: String, 
        phoneNumber: String
        }
    );


const db = {};
db.mongoose = mongoose;
db.uri = "mongodb+srv://webdev2:XiR7ZEC34G9tJSqy@adressbook.hwtkmfx.mongodb.net/test"
db.user = mongoose.model("user", user);
db.contact = mongoose.model("contact", contact);



module.exports = db;

