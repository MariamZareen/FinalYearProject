const express=require('express')
const router=express.Router()
const userTable = require('./mongo')


router.get('/',(req,res)=>{
    res.send("hello")
})

router.post('/signup',async(req,res)=>{
 try{
    const {name,username,email,password}=req.body
    if(!name || !username || !email || !password) {
        res.status(422).send("all fields are required.. missing field detected")
    }
    const findEmail=await userTable.findOne({email:email})
    if(findEmail){
        res.send("account already exists")
    }
    else{
    const user=new userTable({name,username,email,password})
    await user.save()
    .then(user=>res.send("saved to database"))
    .catch(()=>res.json("couldnot save data"))
    }
  }
  catch{
    console.log("problem in post method of signup in auth")
  }
})


module.exports=router