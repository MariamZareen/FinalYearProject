const mongoose = require('mongoose');
const { mongoUrl } = require('./keys');

// Connect to the database
mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error("Could not connect to the database:", err);
    });

// User schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    passout: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creditpoint: Number
});
const userTable = mongoose.model("User", userSchema);

// Event schema
const eventSchema = new mongoose.Schema({
    eventname: String,
    date: String,
    coverimg: String,
    rupees:Number,
    tokens:Number
});
const eventTable = mongoose.model("Event", eventSchema);

// Booked schema
const bookedSchema = new mongoose.Schema({
    user: String,
    eventname: String,
    date: String,
    coverimg: String,
    paymentmode: String,
    amount: Number
});
const bookedTable = mongoose.model("BookedEvent", bookedSchema);

// Profile schema
const profileSchema = new mongoose.Schema({
    user: String,
    profilepic: String,
    internships: [String],
    leetcode: Number,
    codechef: Number,
    codeforce: Number,
    skills: [String]
});
const profileTable = mongoose.model("Profile", profileSchema);

// Post schema
const postSchema = new mongoose.Schema({
    usn: String,
    projectname: String,
    details: String,
    coverimg: String,
    projectlink: String,
    likes: { type: Number, default: 0 }
});
const postTable = mongoose.model("Post", postSchema);

module.exports = { userTable, profileTable, eventTable, bookedTable, postTable };
