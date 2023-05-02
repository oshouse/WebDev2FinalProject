const db = require("../models");
const User = db.user;
const Contact = db.contact

// Create and Save a new Tutorial
exports.createContact = (req, res) => {
    if (!req.body.userID) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Contact
    const contact = new Contact({
        userID: req.body.userID,
        address: req.body.address,
        name: req.body.name,
        phoneNumer: req.body.string,
        notes: req.body.notes
    });

    // Save Contact in the database
    contact
        .save(contact)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
        });
    
};

exports.createUser = (req, res) => {
    console.log(req.body);
    if (!req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    } 

    // Create a User
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    // Save User in the database
    user
        .save(user)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
        });
};

// Retrieve all Contacts from the database from user.
exports.findContactsForUser = (req, res) => {
    const userID_ = req.params.id;
    console.log(userID_);
    Contact.find({userID: userID_})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Tutorial with an id
exports.findUser = (req, res) => {

    const username_= req.body.username
    const password_= req.body.password

    User.find({"password": password_, "username": username_})
      .then(data => {
        
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};