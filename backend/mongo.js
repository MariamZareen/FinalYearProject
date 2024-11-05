const mongoose=require('mongoose')
const {mongoUrl}=require('./keys')

mongoose.connect(mongoUrl)
.then(()=>{
    console.log("database connected successfully")
})
.catch(()=>{
    console.log("couldnot connect to the database")
})


// User schema
const userSchema = new mongoose.Schema({
    "fullname": {
        type: String,
        required: true
    },
    "username": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    }
});

// User model
const userTable = mongoose.model("User", userSchema);

// Profile schema
const profileSchema = new mongoose.Schema({
    "user": {
        type: String,
        ref: 'User',
        required: true
    },
    "dp": String,
    "post": Number,
    "followers": Number,
    "following": Number,
    "bio": String
});

// Profile model
const profileTable = mongoose.model("Profile", profileSchema);


module.exports={userTable,profileTable}