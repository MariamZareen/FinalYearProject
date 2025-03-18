const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const cors=require('cors')
const { userTable, profileTable, eventTable, bookedTable, postTable} =require('./mongo')
const PORT=5000
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    console.log("This is working")
})

app.get('/app/editprofile/:userId', async (req, res) => {
  try {
    console.log('hi this is edit profile link')
    console.log(req.params.userId)
    const profile = await profileTable.findOne({ user: req.params.userId });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/', async (req, res) => {
    try {
        // const existingEmail = await userTable.findOne({ email: req.body.email });
        const existingUser = await userTable.findOne({ username: req.body.email });

        if (existingUser) {
            const userToCheck = existingUser ; 

            if (req.body.password === userToCheck.password) {
                console.log("Login successful");
                res.status(200).json({ username: userToCheck.username });
            } else {
                console.log("Incorrect password");
                res.status(401).json("Incorrect password");
            }
        } else {
            console.log("User with this usn not found");
            res.status(404).json("User not found, please sign up");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("Error during login");
    }
});


app.post('/signup', async (req, res) => {
    try {
      // const { email, fullname, username, password } = req.body;
      const {dept,passout,fullname,username,password} =req.body;
      const findName = await userTable.find({ username: username });
      if (findName.length == 0) {
        const data = new userTable({
          fullname: fullname,
          username: username,
          dept:dept,
          passout:passout,
          password: password,
          creditpoint:0
        });
        await data.save();
  
        
        // Creating default profile for every user
        const newProfile = await profileTable.create({
          user: data.username, 
          profilepic: "https://cdn-icons-png.freepik.com/256/12594/12594345.png?semt=ais_hybrid",
          codechef: 0,
          codeforce: 0,
          leetcode: 0,
          skills:[],
          internships:[]
        });
  
        await newProfile.save();
        res.status(200).json("User created successfully");
      } else {
        console.log("Data already exists... please sign in");
        res.status(401).json("Username already exists. Try giving a different username");
      }
    } catch (error) {
      console.log("Problem in post method of signup", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

// Get profile and booked events for a user
app.get('/profile/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch user details
    const user = await userTable.findOne({ username: id });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch user profile
    const profile = await profileTable.findOne({ user: id });

    // Fetch booked events
    const booked = await bookedTable.find({ user: id });

    const posts = await postTable.find({ usn: id });

    // Return all data
    res.status(200).json({ user, profile, booked, posts });

  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Error getting profile data" });
  }
});


// Get all posts
app.get('/app/home', async (req, res) => {
  try {
      const posts = await postTable.find();
      //here post has user id. get the user usn from that table and then send 
      // console.log(posts)
      res.status(200).json(posts);
  } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Error getting post data" });
  }
});

//get user data 
app.get('/app/users', async (req, res) => {
  try {
      const users = await userTable.find();
      //here post has 
      res.status(200).json(users);
  } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Error getting users data" });
  }
});

// Get all announcements (events)
app.get('/app/announcements/:username', async (req, res) => {
  try {
    const { username } = req.params;

    // Fetch events and user details in parallel
    const [events, user,bookedEvents] = await Promise.all([
      eventTable.find(), 
      userTable.findOne({ username }),
      bookedTable.find({username})
    ]);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ events, user,bookedEvents });
  } catch (error) {
    console.error("Error fetching events and user data:", error);
    res.status(500).json({ message: "Error getting events data" });
  }
});


app.put('/app/update-tokens/:username', async (req, res) => {
  try {
    const { tokens } = req.body;
    console.log('Received Update Request for:', req.params.username, 'with Tokens:', tokens);

    const user = await userTable.findOne({ username: req.params.username });
  
    const result = await userTable.updateOne(
      { username: req.params.username },
      { $set: { creditpoint: tokens } }
    );

    console.log('Update successful');
    res.status(200).json({ message: 'Tokens updated successfully' });

  } catch (error) {
    console.error('Error updating tokens:', error);
    res.status(500).json({ message: 'Error updating tokens' });
  }
});



app.post('/app/book-ticket', async (req, res) => {
  try {
    const { user, eventname, date,coverimg, paymentmode, amount } = req.body;

    await bookedTable.create({ user, eventname, date,coverimg, paymentmode, amount });

    res.status(200).json({ message: 'Ticket booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error booking ticket' });
  }
});



// to add resource or project 
app.post('/app/add-project', async (req, res) => {
  try {
    const { usn, projectname, details, coverimg, projectlink,type } = req.body;

    // Validate input
    if (!usn || !projectname || !details || !coverimg || !projectlink) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const likes=0
    // console.log(usn,projectname,likes,coverimg,projectlink)
    const newProject = new postTable({
      usn,
      projectname,
      details,
      coverimg,
      projectlink,
      likes
    });
    // console.log(newProject)

    await newProject.save();

    let points = 0; 
    if(type==="project")
      points = 20
    else 
      points=10

    await userTable.findOneAndUpdate(
      { username: usn },
      { $inc: { creditpoint: points } },
      { new: true }
  );
  
    res.status(201).json({ message: "Project added successfully" });
  } catch (error) {
    console.error("Error saving project:", error);
    res.status(500).json({ message: "Server Error" });
  }
});




// Update or create profile
app.put('/app/editprofile/:userId', async (req, res) => {
  try {
    const { profilepic, internships, leetcode, codechef, codeforce, skills } = req.body;

    const updatedProfile = {
      user: req.params.userId,
      profilepic,
      internships,
      leetcode,
      codechef,
      codeforce,
      skills,
    };

    const profile = await profileTable.findOneAndUpdate(
      { user: req.params.userId },
      updatedProfile,
      { new: true, upsert: true }
    );
    // console.log('profile updated successfully')
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});