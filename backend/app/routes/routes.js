module.exports = app => {
    const addressBook = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    router.post("/contact", addressBook.createContact);

    router.post("/user", addressBook.createUser);

    router.get("/findContact/:id", addressBook.findContactsForUser);
  
    router.post("/findUser", addressBook.findUser);

    router.post("/searchContact", addressBook.searchContact);

    app.use("/api", router);

  };
  
