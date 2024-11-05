const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const cors=require('cors')
const {userTable,profileTable} =require('./mongo')
const PORT=5000

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    console.log("This is working")
})

app.post('/', async (req, res) => {
    try {
        const existingEmail = await userTable.findOne({ email: req.body.email });
        const existingUser = await userTable.findOne({ username: req.body.email });

        if (existingUser || existingEmail) {
            const userToCheck = existingUser || existingEmail; 

            if (req.body.password === userToCheck.password) {
                console.log("Login successful");
                res.status(200).json({ username: userToCheck.username });
            } else {
                console.log("Incorrect password");
                res.status(401).json("Incorrect password");
            }
        } else {
            console.log("User with this email/username not found");
            res.status(404).json("User not found, please sign up");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("Error during login");
    }
});


app.post('/signup', async (req, res) => {
    try {
      const { email, fullname, username, password } = req.body;
      const findName = await userTable.find({ username: username });
      if (findName.length == 0) {
        const data = new userTable({
          fullname: fullname,
          username: username,
          email: email,
          password: password,
        });
        await data.save();
  
        
        // Creating default profile for every user
        const newProfile = await profileTable.create({
          user: data.username, 
          dp: "https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg",
          post: 0,
          followers: 0,
          following: 0,
          bio: "",
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
  

  app.get('/profile/:id',async (req,res)=>{
    try{
    const {id}=req.params
      console.log(id)
      const profile = await profileTable.findOne({user: id})
      //console.log(profile)
      //console.log("profile data sent successfully")
      res.status(200).json(profile)
    }
    catch{
      res.status(400).send("error getting profile data")
    }
  })


app.listen(PORT,()=>{
    console.log("server running on port ",PORT)
})
